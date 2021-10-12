import React, {useEffect, useState} from 'react'
import {Button, Input, Text} from 'uikit'
import styled from 'styled-components'
import {Progress} from 'antd';
import {useIdo} from "../../../hooks/useIdo";
import useToast from "../../../hooks/useToast";
import {useTranslation} from "../../../contexts/Localization";
import ValueNumber from "./ValueNumber";
import useTokenBalance from "../../../hooks/useTokenBalance";
import {getAddress} from "../../../utils/addressHelpers";
import tokens from "../../../config/constants/tokens";
import {getBalanceNumber} from "../../../utils/formatBalance";
import {useWeb3React} from "@web3-react/core";
import WalletConnect from "../../../uikit/widgets/WalletModal/icons/WalletConnect";
import ConnectModal from "../../../uikit/widgets/WalletModal/ConnectModal";

export default function Deposit({idoData, userData}) {
    const idoAction = useIdo();
    const [value, setValue] = useState(0);
    const [reload, setReload] = useState(0);
    const [amountMushu, setAmountMushu] = useState(0);
    const [isApprove, setIsApprove] = useState(false);
    const [pendingTx, setPendingTx] = useState(false);
    const {balance: usdtBalance} = useTokenBalance(getAddress(tokens.usdt.address));
    const {toastSuccess, toastError} = useToast();
    const {account} = useWeb3React();
    const {t} = useTranslation();

    useEffect(() => {
        if (account) {
            idoAction.allowance(account)
                .then(setIsApprove)
        }
    }, [account, reload]);

    const onDeposit = async () => {
        setPendingTx(true)
        try {
            await idoAction.ido(value)
            toastSuccess(t('Deposit success'))
        } catch (e) {
            toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!')
            )
            console.error(e)
        } finally {
            setPendingTx(false)
        }
    }

    const onApprove = async () => {
        setPendingTx(true)
        try {
            await idoAction.approve().then(({wait}) => wait().then(res => {
                toastSuccess(t('Approve Success'))
                setReload(Date.now())
            }))
        } catch (e) {
            toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!')
            )
            console.error(e)
        } finally {
            setPendingTx(false)
        }
    }

    const onWithdraw = async (withdrawable) => {
        setPendingTx(true)
        try {
            if (idoData.withdrawable) {
                return await idoAction.withdraw().then(res => {
                    toastSuccess(t('withdraw success'))
                })
            }
            return toastSuccess(t('Please wait !!!'))
        } catch (e) {
            toastError(
                t('Error'),
                t('Please try again. Confirm the transaction and make sure you are paying enough gas!')
            )
            console.error(e)
        } finally {
            setPendingTx(false)
        }
    }

    return (
        <>
            <Text
                bold
                style={{fontSize: "28px", fontWeight: "bold"}}
            >
                BUY MUSHU
            </Text>
            <StyledFormIDO>
                <div className="process">
                    <div className="h4">
                        {
                            idoData.raisedTotal &&
                            `${idoData.raisedTotal} / ${idoData.maxUsdtCap} USDT Raised`
                        }
                    </div>
                    <Progress
                        strokeLinecap="square"
                        percent={idoData.percentRaised ? idoData.percentRaised.toFixed(1) : 0}
                    />
                </div>
                <div style={{display: "flex"}}>
                    <Input
                        onChange={(e) => {
                            setValue(+e.target.value)
                            setAmountMushu(+e.target.value / 0.15)
                        }}
                        type="number"
                        min={0}
                        style={{borderRadius: "8px 0 0 8px", height: "48px", textAlign: "center", zIndex: 1}}
                        value={+value}
                        disabled={idoData.startTime == 0 || idoData.ended}
                    />
                    <div className="badge-usdt">
                        USDT
                    </div>
                    <Button
                        style={{borderRadius: '0 8px 8px 0'}}
                        disabled={idoData.startTime == 0 || idoData.ended}
                        onClick={() => {
                            setValue(
                                getBalanceNumber(usdtBalance, 6)
                            )
                            setAmountMushu(getBalanceNumber(usdtBalance, 6) / 0.15)
                        }}
                    >
                        MAX
                    </Button>
                </div>
                <div className="receive">
                    {
                        idoData.endTime < Date.now() && idoData.ended ?
                            "The IDO has finished. Please wait for few minutes to claim." :
                            <>
                                You will get <ValueNumber value={amountMushu} decimals={2}/> MUSHU !
                            </>
                    }
                </div>
                <div style={{
                    margin: "15px auto",
                    width: "17 0px",
                    display: "flex",
                    justifyContent: "center"
                }}>

                    {
                        account ? <>
                            {
                                userData.deposited > 0 && !userData.isWithdraw && idoData.ended ?
                                    <Button
                                        width="100%"
                                        disabled={!idoData.ended}
                                        onClick={() => onWithdraw(idoData)}
                                    >
                                        {
                                            idoData.withdrawable ?
                                                "Withdraw"
                                                :
                                                "Waiting"
                                        }
                                    </Button> :
                                    <Button
                                        width="100%"
                                        disabled={
                                            pendingTx ||
                                            idoData.endTime < Date.now() ||
                                            value == 0 ||
                                            typeof value != "number" ||
                                            value < idoData.minIndividualCap ||
                                            !isApprove
                                        }
                                        onClick={isApprove ? onDeposit : onApprove}
                                    >
                                        {
                                            userData.isWhitelist ?
                                                idoData.endTime < Date.now() ?
                                                    (
                                                        (idoData.endTime == 0 ? "Not Start" : "Ended")
                                                    )
                                                    :
                                                    "Contribute" :
                                                "Not in Whitelist"
                                        }
                                    </Button>
                            }
                            {
                                !isApprove &&
                                <Button
                                    width="100%"
                                    disabled={pendingTx || isApprove}
                                    onClick={onApprove}
                                    style={{marginLeft: "10px"}}
                                >
                                    Approve
                                </Button>
                            }
                        </> :
                        <></>
                    }
                </div>
            </StyledFormIDO>
        </>
    )
}

const StyledFormIDO = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .receive{
            margin-top: 10px;
        }
        .process{
            margin: 30px 0;
            width: 100%;
            .ant-progress-inner{
                background-color: #e1e1e1;
            }
        }
        .badge-usdt{
            line-height: 46px;
            padding: 0 10px;
            background-color: #eeeaf4;
            border: 1px solid #d7caec;
        }
    `

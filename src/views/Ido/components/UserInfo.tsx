import React from 'react'
import {Text} from 'uikit'
import useTokenBalance from "../../../hooks/useTokenBalance";
import {getAddress, getCakeAddress} from "../../../utils/addressHelpers";
import tokens from "../../../config/constants/tokens";
import {getBalanceNumber} from "../../../utils/formatBalance";
import ValueNumber from "./ValueNumber";


export default function UserInfo({userData}) {
    const {balance: usdtBalance} = useTokenBalance(getAddress(tokens.usdt.address))
    const {balance: mushuBalance} = useTokenBalance(getCakeAddress())
    return (
        <>
            <table className="saving-table" style={{marginTop: '20px'}}>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>USDT Balance</Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            <ValueNumber value={getBalanceNumber(usdtBalance, 6)} /> USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text
                            style={{fontSize: "14px"}}
                        >
                            MUSHU Balance
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            <ValueNumber value={getBalanceNumber(mushuBalance, 18)} /> MUSHU
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>Deposited</Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {userData.deposited} USDT
                        </Text>
                    </td>
                </tr>
                <tr>

                </tr>
            </table>

        </>
    )
}

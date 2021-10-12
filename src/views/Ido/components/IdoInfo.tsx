import React from 'react'
import {Text} from 'uikit'
import {getBalanceNumber} from 'utils/formatBalance'
import Countdown from "react-countdown";
import CountdownComponent from "../countdown/Countdown";
import CardValue from "../../Home/components/CardValue";
import CountdownStart from "../countdown/CowntdownStart";

export default function IdoInfo({idoData}) {
    return (
        <>
            <table className="saving-table" style={{marginTop: '20px'}}>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Soft Cap
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            <CardValue value={200000} decimals={0} fontSize="15px" lineHeight="36px"/> USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Hard Cap
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {idoData.maxUsdtCap ? idoData.maxUsdtCap.toLocaleString("EN") : "N/A"} USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Presale price
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            1 MUSHU = 0,15 USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Total deposited
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {idoData ? idoData.raisedTotal : "N/A"} USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Minimum Contribution
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {idoData.minIndividualCap ? idoData.minIndividualCap : "N/A"} USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Maximum Contribution
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {idoData.maxIndividualCap ? idoData.maxIndividualCap : "N/A"} USDT
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Presale Start Time
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            <CountdownStart dataIdo={idoData} epochTime={1633737600000}/>
                        </Text>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Text style={{fontSize: "14px"}}>
                            Presale End Time
                        </Text>
                    </td>
                    <td>
                        <Text
                            style={{fontSize: "15px"}}
                            bold
                            color="primary"
                            className="font-alt"
                        >
                            {
                                idoData.endTime ?
                                    <CountdownComponent epochTime={idoData.endTime} />
                                    : "N/A"
                            }

                        </Text>
                    </td>
                </tr>
            </table>

        </>
    )
}

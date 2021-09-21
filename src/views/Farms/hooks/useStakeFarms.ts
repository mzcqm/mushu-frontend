import { useCallback } from 'react'
import { stakeFarm } from 'utils/calls'
import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pid: number) => {
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(masterChefContract, pid, amount, "0x0B9dfc70676c1c5e31B6Ee96c3D1F9C1b6487119")
      console.info(txHash)
    },
    [masterChefContract, pid],
  )

  return { onStake: handleStake }
}

export default useStakeFarms

const { default: axios } = require('axios')
const {ethers} = require('ethers')

const node = 'https://bit.ly/3CjUQc8' Quicknode
const provider = new ethers.providers.JsonRpcProvider(node)


url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=YourAPIKey'

async function main(){
    //EthersJS
    const gasPrice = await provider.getGasPrice()
    console.log(ethers.utils.formatEther(gasPrice))
    console.log(ethers.utils.formatUnits(gasPrice, 'gwei'))

    const gas = await provider.getFeeData()
    console.log(ethers.utils.formatUnits(gas.maxFeePerGas, 'gwei'))
    console.log(ethers.utils.formatUnits(gas.maxPriorityFeePerGas, 'gwei'))
    

    //Etherscan
    const gasTracker = await axios.get(url)
    console.log(gas.data.result.SafeGasPrice)
    console.log(gas.data.result.ProposeGasPrice)
    console.log(gas.data.result.FastGasPrice)
    

}
main()

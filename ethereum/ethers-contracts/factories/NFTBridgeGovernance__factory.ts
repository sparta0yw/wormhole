/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  NFTBridgeGovernance,
  NFTBridgeGovernanceInterface,
} from "../NFTBridgeGovernance";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldContract",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newContract",
        type: "address",
      },
    ],
    name: "ContractUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId_",
        type: "uint16",
      },
    ],
    name: "bridgeContracts",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "evmChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "finality",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "governanceActionIsConsumed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceChainId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceContract",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFork",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "isInitialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "isTransferCompleted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "isWrappedAsset",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedRecoverChainId",
        type: "bytes",
      },
    ],
    name: "parseRecoverChainId",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "evmChainId",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "newChainId",
            type: "uint16",
          },
        ],
        internalType: "struct NFTBridgeStructs.RecoverChainId",
        name: "rci",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "parseRegisterChain",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "emitterChainID",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTBridgeStructs.RegisterChain",
        name: "chain",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "parseUpgrade",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "module",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "newContract",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTBridgeStructs.UpgradeContract",
        name: "chain",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVM",
        type: "bytes",
      },
    ],
    name: "registerChain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "splCache",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "name",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "symbol",
            type: "bytes32",
          },
        ],
        internalType: "struct NFTBridgeStorage.SPLCache",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVM",
        type: "bytes",
      },
    ],
    name: "submitRecoverChainId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedVM",
        type: "bytes",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "tokenChainId",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "tokenAddress",
        type: "bytes32",
      },
    ],
    name: "wrappedAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061189f806100206000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806384acd1bb116100b8578063b172b2221161007c578063b172b22214610389578063cb4cfea814610391578063d60b347f146103de578063e039f2241461040a578063fbe3c2cd14610412578063fbeeacd91461042457600080fd5b806384acd1bb146103035780639a8a059214610314578063a5799f931461032f578063aa4efa5b14610342578063ad66a5f11461036557600080fd5b80632c3c02a4116100ff5780632c3c02a4146102365780632f3a3d5d146102595780633ca648261461026a57806364d42b17146102d1578063739fc8d1146102e357600080fd5b806301f532551461013c578063178149e7146101a75780631a2be4da146101bc5780631ff1e286146101f85780632539464514610223575b600080fd5b61014f61014a3660046113ba565b610471565b60405161019e9190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b6101ba6101b53660046113ba565b610660565b005b6101e86101ca36600461143a565b6001600160a01b031660009081526008602052604090205460ff1690565b604051901515815260200161019e565b61020b61020636600461147d565b61076b565b6040516001600160a01b03909116815260200161019e565b6101ba6102313660046113ba565b61079a565b6101e86102443660046114a9565b60009081526004602052604090205460ff1690565b6001546001600160a01b031661020b565b6102b66102783660046114a9565b6040805180820190915260008082526020820152506000908152600a6020908152604091829020825180840190935280548352600101549082015290565b6040805182518152602092830151928101929092520161019e565b600b545b60405190815260200161019e565b600254640100000000900460ff1660405160ff909116815260200161019e565b6000546001600160a01b031661020b565b60025461ffff165b60405161ffff909116815260200161019e565b6101ba61033d3660046113ba565b610898565b6101e86103503660046114a9565b60009081526005602052604090205460ff1690565b6102d56103733660046114c2565b61ffff1660009081526009602052604090205490565b6003546102d5565b6103a461039f3660046113ba565b61098c565b60405161019e91908151815260208083015160ff16908201526040808301519082015260609182015161ffff169181019190915260800190565b6101e86103ec36600461143a565b6001600160a01b031660009081526006602052604090205460ff1690565b6101e8610b36565b60025462010000900461ffff1661031c565b6104376104323660046113ba565b610b49565b60405161019e91908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052906104a68382610d0c565b82526104b36020826114df565b8251909150684e4654427269646765146105205760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206d6f64604482015262756c6560e81b60648201526084015b60405180910390fd5b61052a8382610d6a565b60ff16602083015261053d6001826114df565b9050816020015160ff166001146105a25760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e672061637460448201526234b7b760e91b6064820152608401610517565b6105ac8382610dc6565b61ffff1660408301526105c06002826114df565b90506105cc8382610dc6565b61ffff1660608301526105e06002826114df565b90506105ec8382610d0c565b60808301526105fc6020826114df565b90508083511461065a5760405162461bcd60e51b815260206004820152602360248201527f696e76616c6964205265676973746572436861696e3a2077726f6e67206c656e6044820152620cee8d60eb1b6064820152608401610517565b50919050565b610668610b36565b6106a15760405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b6044820152606401610517565b60008060006106af84610e23565b9250925092508181906106d55760405162461bcd60e51b81526004016105179190611550565b506106e4836101400151611033565b60006106f38460e0015161098c565b90504681604001511461073c5760405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b6044820152606401610517565b610749816040015161104e565b60608101516002805461ffff191661ffff9092169190911790555b5050505050565b61ffff821660009081526007602090815260408083208484529091529020546001600160a01b03165b92915050565b6107a2610b36565b156107de5760405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b6044820152606401610517565b60008060006107ec84610e23565b9250925092508181906108125760405162461bcd60e51b81526004016105179190611550565b50610821836101400151611033565b60006108308460e00151610b49565b905061083f60025461ffff1690565b61ffff16816040015161ffff161461088a5760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b6044820152606401610517565b606081015161076490611097565b60008060006108a684610e23565b9250925092508181906108cc5760405162461bcd60e51b81526004016105179190611550565b506108db836101400151611033565b60006108ea8460e00151610471565b90506108f960025461ffff1690565b61ffff16816040015161ffff161480156109185750610916610b36565b155b806109295750604081015161ffff16155b6109685760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b6044820152606401610517565b6107648160600151826080015161ffff909116600090815260096020526040902055565b6040805160808101825260008082526020820181905291810182905260608101829052906109ba8382610d0c565b82526109c76020826114df565b8251909150684e465442726964676514610a2f5760405162461bcd60e51b8152602060048201526024808201527f696e76616c6964205265636f766572436861696e49643a2077726f6e67206d6f60448201526364756c6560e01b6064820152608401610517565b610a398382610d6a565b60ff166020830152610a4c6001826114df565b9050816020015160ff16600314610ab15760405162461bcd60e51b8152602060048201526024808201527f696e76616c6964205265636f766572436861696e49643a2077726f6e672061636044820152633a34b7b760e11b6064820152608401610517565b610abb83826111c4565b6040830152610acb6020826114df565b9050610ad78382610dc6565b61ffff166060830152610aeb6002826114df565b90508083511461065a5760405162461bcd60e51b81526020600482015260166024820152751a5b9d985b1a5908149958dbdd995c90da185a5b925960521b6044820152606401610517565b600046610b42600b5490565b1415905090565b604080516080810182526000808252602082018190529181018290526060810182905290610b778382610d0c565b8252610b846020826114df565b8251909150684e465442726964676514610bee5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206d6044820152646f64756c6560d81b6064820152608401610517565b610bf88382610d6a565b60ff166020830152610c0b6001826114df565b9050816020015160ff16600214610c725760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206160448201526431ba34b7b760d91b6064820152608401610517565b610c7c8382610dc6565b61ffff166040830152610c906002826114df565b9050610c9c8382610d0c565b6060830152610cac6020826114df565b90508083511461065a5760405162461bcd60e51b815260206004820152602560248201527f696e76616c69642055706772616465436f6e74726163743a2077726f6e67206c6044820152640cadccee8d60db1b6064820152608401610517565b6000610d198260206114df565b83511015610d615760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b6044820152606401610517565b50016020015190565b6000610d778260016114df565b83511015610dbd5760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b6044820152606401610517565b50016001015190565b6000610dd38260026114df565b83511015610e1a5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b6044820152606401610517565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000610e966000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401610ec19190611550565b600060405180830381865afa158015610ede573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f0691908101906116d3565b92509250925081610f1d579194509250905061102c565b60025462010000900461ffff1661ffff16836060015161ffff1614610f795750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b602082015290935060009250905061102c565b600354836080015114610fca57505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e747261637400000000000000602082015290935060009250905061102c565b61014083015160009081526004602052604090205460ff1615611011578260006040518060600160405280602281526020016118486022913995509550955050505061102c565b50506040805160208101909152600081529093506001925090505b9193909250565b6000908152600460205260409020805460ff19166001179055565b4681146110925760405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b6044820152606401610517565b600b55565b60006110ca7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b90506110d582611219565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b038616916111189161182b565b600060405180830381855af49150503d8060008114611153576040519150601f19603f3d011682016040523d82523d6000602084013e611158565b606091505b509150915081819061117d5760405162461bcd60e51b81526004016105179190611550565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b60006111d18260206114df565b83511015610d615760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b6044820152606401610517565b61122281611259565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6112bd5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610517565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff81118282101715611337576113376112fe565b60405290565b604051610160810167ffffffffffffffff81118282101715611337576113376112fe565b604051601f8201601f1916810167ffffffffffffffff8111828210171561138a5761138a6112fe565b604052919050565b600067ffffffffffffffff8211156113ac576113ac6112fe565b50601f01601f191660200190565b6000602082840312156113cc57600080fd5b813567ffffffffffffffff8111156113e357600080fd5b8201601f810184136113f457600080fd5b803561140761140282611392565b611361565b81815285602083850101111561141c57600080fd5b81602084016020830137600091810160200191909152949350505050565b60006020828403121561144c57600080fd5b81356001600160a01b038116811461146357600080fd5b9392505050565b61ffff8116811461147a57600080fd5b50565b6000806040838503121561149057600080fd5b823561149b8161146a565b946020939093013593505050565b6000602082840312156114bb57600080fd5b5035919050565b6000602082840312156114d457600080fd5b81356114638161146a565b8082018082111561079457634e487b7160e01b600052601160045260246000fd5b60005b8381101561151b578181015183820152602001611503565b50506000910152565b6000815180845261153c816020860160208601611500565b601f01601f19169290920160200192915050565b6020815260006114636020830184611524565b805160ff8116811461157457600080fd5b919050565b805163ffffffff8116811461157457600080fd5b80516115748161146a565b805167ffffffffffffffff8116811461157457600080fd5b600082601f8301126115c157600080fd5b81516115cf61140282611392565b8181528460208386010111156115e457600080fd5b6115f5826020830160208701611500565b949350505050565b600082601f83011261160e57600080fd5b8151602067ffffffffffffffff82111561162a5761162a6112fe565b611638818360051b01611361565b82815260079290921b8401810191818101908684111561165757600080fd5b8286015b848110156116b857608081890312156116745760008081fd5b61167c611314565b8151815284820151858201526040611695818401611563565b9082015260606116a6838201611563565b9082015283529183019160800161165b565b509695505050505050565b8051801515811461157457600080fd5b6000806000606084860312156116e857600080fd5b835167ffffffffffffffff8082111561170057600080fd5b90850190610160828803121561171557600080fd5b61171d61133d565b61172683611563565b815261173460208401611579565b602082015261174560408401611579565b60408201526117566060840161158d565b60608201526080830151608082015261177160a08401611598565b60a082015261178260c08401611563565b60c082015260e08301518281111561179957600080fd5b6117a5898286016115b0565b60e0830152506101006117b9818501611579565b9082015261012083810151838111156117d157600080fd5b6117dd8a8287016115fd565b9183019190915250610140838101519082015294506117fe602087016116c3565b9350604086015191508082111561181457600080fd5b50611821868287016115b0565b9150509250925092565b6000825161183d818460208701611500565b919091019291505056fe676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a2646970667358221220032ccad44cc777c2bfc83cc68e951696e1f7aca1971051c479968e69a1d9a17c64736f6c63430008110033";

type NFTBridgeGovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTBridgeGovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTBridgeGovernance__factory extends ContractFactory {
  constructor(...args: NFTBridgeGovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NFTBridgeGovernance> {
    return super.deploy(overrides || {}) as Promise<NFTBridgeGovernance>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NFTBridgeGovernance {
    return super.attach(address) as NFTBridgeGovernance;
  }
  override connect(signer: Signer): NFTBridgeGovernance__factory {
    return super.connect(signer) as NFTBridgeGovernance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTBridgeGovernanceInterface {
    return new utils.Interface(_abi) as NFTBridgeGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTBridgeGovernance {
    return new Contract(address, _abi, signerOrProvider) as NFTBridgeGovernance;
  }
}

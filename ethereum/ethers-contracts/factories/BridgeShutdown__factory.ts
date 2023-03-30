/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  BridgeShutdown,
  BridgeShutdownInterface,
} from "../BridgeShutdown";

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
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "contract IWETH",
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
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "outstandingBridged",
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
        internalType: "struct BridgeStructs.RecoverChainId",
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
        internalType: "struct BridgeStructs.RegisterChain",
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
        internalType: "struct BridgeStructs.UpgradeContract",
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
  "0x608060405234801561001057600080fd5b506001600d55611774806100256000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80639a8a0592116100c3578063b96c7e4d1161007c578063b96c7e4d14610359578063cb4cfea814610382578063d60b347f146103cf578063e039f224146103fb578063fbe3c2cd14610403578063fbeeacd91461041557600080fd5b80639a8a0592146102cb578063a5799f93146102e6578063aa4efa5b146102f9578063ad5c46481461031c578063ad66a5f11461032d578063b172b2221461035157600080fd5b80632c3c02a4116101155780632c3c02a41461024c5780632f3a3d5d1461026f57806364d42b1714610280578063739fc8d1146102925780638129fc1c146102b257806384acd1bb146102ba57600080fd5b806301f5325514610152578063178149e7146101bd5780631a2be4da146101d25780631ff1e2861461020e5780632539464514610239575b600080fd5b610165610160366004611246565b610462565b6040516101b49190600060a0820190508251825260ff6020840151166020830152604083015161ffff808216604085015280606086015116606085015250506080830151608083015292915050565b60405180910390f35b6101d06101cb366004611246565b6105c2565b005b6101fe6101e03660046112c6565b6001600160a01b031660009081526009602052604090205460ff1690565b60405190151581526020016101b4565b61022161021c366004611306565b6106cd565b6040516001600160a01b0390911681526020016101b4565b6101d0610247366004611246565b6106fc565b6101fe61025a366004611332565b60009081526005602052604090205460ff1690565b6001546001600160a01b0316610221565b600c545b6040519081526020016101b4565b600254640100000000900460ff1660405160ff90911681526020016101b4565b6101d06107fa565b6000546001600160a01b0316610221565b60025461ffff165b60405161ffff90911681526020016101b4565b6101d06102f4366004611246565b61085a565b6101fe610307366004611332565b60009081526006602052604090205460ff1690565b6004546001600160a01b0316610221565b61028461033b36600461134b565b61ffff166000908152600b602052604090205490565b600354610284565b6102846103673660046112c6565b6001600160a01b03166000908152600a602052604090205490565b610395610390366004611246565b6109b3565b6040516101b491908151815260208083015160ff16908201526040808301519082015260609182015161ffff169181019190915260800190565b6101fe6103dd3660046112c6565b6001600160a01b031660009081526007602052604090205460ff1690565b6101fe610a9c565b60025462010000900461ffff166102d3565b610428610423366004611246565b610aaf565b6040516101b491908151815260208083015160ff169082015260408083015161ffff16908201526060918201519181019190915260800190565b6040805160a0810182526000808252602082018190529181018290526060810182905260808101829052906104978382610b98565b82526104a4602082611368565b82519091506a546f6b656e427269646765146104db5760405162461bcd60e51b81526004016104d290611389565b60405180910390fd5b6104e58382610bf6565b60ff1660208301526104f8600182611368565b9050816020015160ff166001146105215760405162461bcd60e51b81526004016104d2906113af565b61052b8382610c52565b61ffff16604083015261053f600282611368565b905061054b8382610c52565b61ffff16606083015261055f600282611368565b905061056b8382610b98565b608083015261057b602082611368565b9050808351146105bc5760405162461bcd60e51b815260206004820152600c60248201526b0eee4dedcce40d8cadccee8d60a31b60448201526064016104d2565b50919050565b6105ca610a9c565b6106035760405162461bcd60e51b815260206004820152600a6024820152696e6f74206120666f726b60b01b60448201526064016104d2565b600080600061061184610caf565b9250925092508181906106375760405162461bcd60e51b81526004016104d29190611425565b50610646836101400151610ebf565b60006106558460e001516109b3565b90504681604001511461069e5760405162461bcd60e51b815260206004820152601160248201527034b73b30b634b21022ab269021b430b4b760791b60448201526064016104d2565b6106ab8160400151610eda565b60608101516002805461ffff191661ffff9092169190911790555b5050505050565b61ffff821660009081526008602090815260408083208484529091529020546001600160a01b03165b92915050565b610704610a9c565b156107405760405162461bcd60e51b815260206004820152600c60248201526b696e76616c696420666f726b60a01b60448201526064016104d2565b600080600061074e84610caf565b9250925092508181906107745760405162461bcd60e51b81526004016104d29190611425565b50610783836101400151610ebf565b60006107928460e00151610aaf565b90506107a160025461ffff1690565b61ffff16816040015161ffff16146107ec5760405162461bcd60e51b815260206004820152600e60248201526d1ddc9bdb99c818da185a5b881a5960921b60448201526064016104d2565b60608101516106c690610f23565b600061082d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610857816001600160a01b03166000908152600760205260409020805460ff19166001179055565b50565b600080600061086884610caf565b92509250925081819061088e5760405162461bcd60e51b81526004016104d29190611425565b5061089d836101400151610ebf565b60006108ac8460e00151610462565b90506108bb60025461ffff1690565b61ffff16816040015161ffff161480156108da57506108d8610a9c565b155b806108eb5750604081015161ffff16155b61092a5760405162461bcd60e51b815260206004820152601060248201526f1a5b9d985b1a590818da185a5b881a5960821b60448201526064016104d2565b606081015161ffff166000908152600b60205260408120541461098f5760405162461bcd60e51b815260206004820152601860248201527f636861696e20616c72656164792072656769737465726564000000000000000060448201526064016104d2565b6106c68160600151826080015161ffff9091166000908152600b6020526040902055565b6040805160808101825260008082526020820181905291810182905260608101829052906109e18382610b98565b82526109ee602082611368565b82519091506a546f6b656e42726964676514610a1c5760405162461bcd60e51b81526004016104d290611389565b610a268382610bf6565b60ff166020830152610a39600182611368565b9050816020015160ff16600314610a625760405162461bcd60e51b81526004016104d2906113af565b610a6c8382611050565b6040830152610a7c602082611368565b9050610a888382610c52565b61ffff16606083015261057b600282611368565b600046610aa8600c5490565b1415905090565b604080516080810182526000808252602082018190529181018290526060810182905290610add8382610b98565b8252610aea602082611368565b82519091506a546f6b656e42726964676514610b185760405162461bcd60e51b81526004016104d290611389565b610b228382610bf6565b60ff166020830152610b35600182611368565b9050816020015160ff16600214610b5e5760405162461bcd60e51b81526004016104d2906113af565b610b688382610c52565b61ffff166040830152610b7c600282611368565b9050610b888382610b98565b606083015261057b602082611368565b6000610ba5826020611368565b83511015610bed5760405162461bcd60e51b8152602060048201526015602482015274746f427974657333325f6f75744f66426f756e647360581b60448201526064016104d2565b50016020015190565b6000610c03826001611368565b83511015610c495760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016104d2565b50016001015190565b6000610c5f826002611368565b83511015610ca65760405162461bcd60e51b8152602060048201526014602482015273746f55696e7431365f6f75744f66426f756e647360601b60448201526064016104d2565b50016002015190565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e082018190526101008201839052610120820152610140810191909152600060606000806000610d226000546001600160a01b031690565b6001600160a01b031663c0fd8bde886040518263ffffffff1660e01b8152600401610d4d9190611425565b600060405180830381865afa158015610d6a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d9291908101906115a8565b92509250925081610da95791945092509050610eb8565b60025462010000900461ffff1661ffff16836060015161ffff1614610e055750506040805180820190915260168152753bb937b7339033b7bb32b93730b731b29031b430b4b760511b6020820152909350600092509050610eb8565b600354836080015114610e5657505060408051808201909152601981527f77726f6e6720676f7665726e616e636520636f6e7472616374000000000000006020820152909350600092509050610eb8565b61014083015160009081526005602052604090205460ff1615610e9d5782600060405180606001604052806022815260200161171d60229139955095509550505050610eb8565b50506040805160208101909152600081529093506001925090505b9193909250565b6000908152600560205260409020805460ff19166001179055565b468114610f1e5760405162461bcd60e51b81526020600482015260126024820152711a5b9d985b1a5908195d9b50da185a5b925960721b60448201526064016104d2565b600c55565b6000610f567f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b9050610f61826110a5565b60408051600481526024810182526020810180516001600160e01b031663204a7f0760e21b179052905160009182916001600160a01b03861691610fa491611700565b600060405180830381855af49150503d8060008114610fdf576040519150601f19603f3d011682016040523d82523d6000602084013e610fe4565b606091505b50915091508181906110095760405162461bcd60e51b81526004016104d29190611425565b50836001600160a01b0316836001600160a01b03167f2e4cc16c100f0b55e2df82ab0b1a7e294aa9cbd01b48fbaf622683fbc0507a4960405160405180910390a350505050565b600061105d826020611368565b83511015610bed5760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b60448201526064016104d2565b6110ae816110e5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b803b6111495760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016104d2565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156111c3576111c361118a565b60405290565b604051610160810167ffffffffffffffff811182821017156111c3576111c361118a565b604051601f8201601f1916810167ffffffffffffffff811182821017156112165761121661118a565b604052919050565b600067ffffffffffffffff8211156112385761123861118a565b50601f01601f191660200190565b60006020828403121561125857600080fd5b813567ffffffffffffffff81111561126f57600080fd5b8201601f8101841361128057600080fd5b803561129361128e8261121e565b6111ed565b8181528560208385010111156112a857600080fd5b81602084016020830137600091810160200191909152949350505050565b6000602082840312156112d857600080fd5b81356001600160a01b03811681146112ef57600080fd5b9392505050565b61ffff8116811461085757600080fd5b6000806040838503121561131957600080fd5b8235611324816112f6565b946020939093013593505050565b60006020828403121561134457600080fd5b5035919050565b60006020828403121561135d57600080fd5b81356112ef816112f6565b808201808211156106f657634e487b7160e01b600052601160045260246000fd5b6020808252600c908201526b77726f6e67206d6f64756c6560a01b604082015260600190565b6020808252600c908201526b3bb937b7339030b1ba34b7b760a11b604082015260600190565b60005b838110156113f05781810151838201526020016113d8565b50506000910152565b600081518084526114118160208601602086016113d5565b601f01601f19169290920160200192915050565b6020815260006112ef60208301846113f9565b805160ff8116811461144957600080fd5b919050565b805163ffffffff8116811461144957600080fd5b8051611449816112f6565b805167ffffffffffffffff8116811461144957600080fd5b600082601f83011261149657600080fd5b81516114a461128e8261121e565b8181528460208386010111156114b957600080fd5b6114ca8260208301602087016113d5565b949350505050565b600082601f8301126114e357600080fd5b8151602067ffffffffffffffff8211156114ff576114ff61118a565b61150d818360051b016111ed565b82815260079290921b8401810191818101908684111561152c57600080fd5b8286015b8481101561158d57608081890312156115495760008081fd5b6115516111a0565b815181528482015185820152604061156a818401611438565b90820152606061157b838201611438565b90820152835291830191608001611530565b509695505050505050565b8051801515811461144957600080fd5b6000806000606084860312156115bd57600080fd5b835167ffffffffffffffff808211156115d557600080fd5b9085019061016082880312156115ea57600080fd5b6115f26111c9565b6115fb83611438565b81526116096020840161144e565b602082015261161a6040840161144e565b604082015261162b60608401611462565b60608201526080830151608082015261164660a0840161146d565b60a082015261165760c08401611438565b60c082015260e08301518281111561166e57600080fd5b61167a89828601611485565b60e08301525061010061168e81850161144e565b9082015261012083810151838111156116a657600080fd5b6116b28a8287016114d2565b9183019190915250610140838101519082015294506116d360208701611598565b935060408601519150808211156116e957600080fd5b506116f686828701611485565b9150509250925092565b600082516117128184602087016113d5565b919091019291505056fe676f7665726e616e636520616374696f6e20616c726561647920636f6e73756d6564a2646970667358221220eef89be06ad0f523ffcb17ff559bf1b279bd573cfc2c797e1dd1ed78b929d66e64736f6c63430008110033";

type BridgeShutdownConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeShutdownConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BridgeShutdown__factory extends ContractFactory {
  constructor(...args: BridgeShutdownConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BridgeShutdown> {
    return super.deploy(overrides || {}) as Promise<BridgeShutdown>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BridgeShutdown {
    return super.attach(address) as BridgeShutdown;
  }
  override connect(signer: Signer): BridgeShutdown__factory {
    return super.connect(signer) as BridgeShutdown__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeShutdownInterface {
    return new utils.Interface(_abi) as BridgeShutdownInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BridgeShutdown {
    return new Contract(address, _abi, signerOrProvider) as BridgeShutdown;
  }
}

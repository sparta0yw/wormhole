/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  RelayProviderGovernance,
  RelayProviderGovernanceInterface,
} from "../RelayProviderGovernance";

const _abi = [
  {
    inputs: [],
    name: "AddressIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerMustBeOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "CallerMustBePendingOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ChainIdIsZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "FailedToInitializeImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "GasPriceIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeCurrencyPriceIsZero",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongChainId",
    type: "error",
  },
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
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovedSenderUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "buffer",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "bufferDenominator",
        type: "uint16",
      },
    ],
    name: "AssetConversionBufferUpdated",
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
        indexed: false,
        internalType: "address",
        name: "coreRelayer",
        type: "address",
      },
    ],
    name: "CoreRelayerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "oldGasOverhead",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "newGasOverhead",
        type: "uint32",
      },
    ],
    name: "DeliverGasOverheadUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAddress",
        type: "bytes32",
      },
    ],
    name: "DeliveryAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransfered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "RewardAddressUpdated",
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
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "approvedSender",
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
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "assetConversionBuffer",
    outputs: [
      {
        internalType: "uint16",
        name: "tolerance",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "toleranceDenominator",
        type: "uint16",
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
    name: "confirmOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "coreRelayer",
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
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "deliverGasOverhead",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
    ],
    name: "deliveryAddress",
    outputs: [
      {
        internalType: "bytes32",
        name: "whFormatAddress",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "gasPrice",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
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
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "maximumBudget",
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
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "nativeCurrencyPrice",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pendingOwner",
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
    inputs: [],
    name: "rewardAddress",
    outputs: [
      {
        internalType: "address payable",
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
        name: "thisRelayerChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "submitOwnershipTransferRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "updateApprovedSender",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "buffer",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "bufferDenominator",
        type: "uint16",
      },
    ],
    name: "updateAssetConversionBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateCoreRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "newGasOverhead",
        type: "uint32",
      },
    ],
    name: "updateDeliverGasOverhead",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChain",
        type: "uint16",
      },
      {
        internalType: "bytes32",
        name: "newAddress",
        type: "bytes32",
      },
    ],
    name: "updateDeliveryAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
      {
        internalType: "uint256",
        name: "maximumTotalBudget",
        type: "uint256",
      },
    ],
    name: "updateMaximumBudget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "updateChainId",
        type: "uint16",
      },
      {
        internalType: "uint128",
        name: "updateGasPrice",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "updateNativeCurrencyPrice",
        type: "uint128",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "chainId",
            type: "uint16",
          },
          {
            internalType: "uint128",
            name: "gasPrice",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "nativeCurrencyPrice",
            type: "uint128",
          },
        ],
        internalType: "struct RelayProviderStructs.UpdatePrice[]",
        name: "updates",
        type: "tuple[]",
      },
    ],
    name: "updatePrices",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "newAddress",
        type: "address",
      },
    ],
    name: "updateRewardAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "chainId",
        type: "uint16",
      },
      {
        internalType: "uint32",
        name: "newWormholeFee",
        type: "uint32",
      },
    ],
    name: "updateWormholeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "relayProviderChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "targetChainId",
        type: "uint16",
      },
    ],
    name: "wormholeFee",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class RelayProviderGovernance__factory {
  static readonly abi = _abi;
  static createInterface(): RelayProviderGovernanceInterface {
    return new utils.Interface(_abi) as RelayProviderGovernanceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayProviderGovernance {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RelayProviderGovernance;
  }
}

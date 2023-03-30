/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace BridgeStructs {
  export type RecoverChainIdStruct = {
    module: PromiseOrValue<BytesLike>;
    action: PromiseOrValue<BigNumberish>;
    evmChainId: PromiseOrValue<BigNumberish>;
    newChainId: PromiseOrValue<BigNumberish>;
  };

  export type RecoverChainIdStructOutput = [
    string,
    number,
    BigNumber,
    number
  ] & {
    module: string;
    action: number;
    evmChainId: BigNumber;
    newChainId: number;
  };

  export type RegisterChainStruct = {
    module: PromiseOrValue<BytesLike>;
    action: PromiseOrValue<BigNumberish>;
    chainId: PromiseOrValue<BigNumberish>;
    emitterChainID: PromiseOrValue<BigNumberish>;
    emitterAddress: PromiseOrValue<BytesLike>;
  };

  export type RegisterChainStructOutput = [
    string,
    number,
    number,
    number,
    string
  ] & {
    module: string;
    action: number;
    chainId: number;
    emitterChainID: number;
    emitterAddress: string;
  };

  export type UpgradeContractStruct = {
    module: PromiseOrValue<BytesLike>;
    action: PromiseOrValue<BigNumberish>;
    chainId: PromiseOrValue<BigNumberish>;
    newContract: PromiseOrValue<BytesLike>;
  };

  export type UpgradeContractStructOutput = [string, number, number, string] & {
    module: string;
    action: number;
    chainId: number;
    newContract: string;
  };
}

export interface BridgeShutdownInterface extends utils.Interface {
  functions: {
    "WETH()": FunctionFragment;
    "bridgeContracts(uint16)": FunctionFragment;
    "chainId()": FunctionFragment;
    "evmChainId()": FunctionFragment;
    "finality()": FunctionFragment;
    "governanceActionIsConsumed(bytes32)": FunctionFragment;
    "governanceChainId()": FunctionFragment;
    "governanceContract()": FunctionFragment;
    "initialize()": FunctionFragment;
    "isFork()": FunctionFragment;
    "isInitialized(address)": FunctionFragment;
    "isTransferCompleted(bytes32)": FunctionFragment;
    "isWrappedAsset(address)": FunctionFragment;
    "outstandingBridged(address)": FunctionFragment;
    "parseRecoverChainId(bytes)": FunctionFragment;
    "parseRegisterChain(bytes)": FunctionFragment;
    "parseUpgrade(bytes)": FunctionFragment;
    "registerChain(bytes)": FunctionFragment;
    "submitRecoverChainId(bytes)": FunctionFragment;
    "tokenImplementation()": FunctionFragment;
    "upgrade(bytes)": FunctionFragment;
    "wormhole()": FunctionFragment;
    "wrappedAsset(uint16,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "WETH"
      | "bridgeContracts"
      | "chainId"
      | "evmChainId"
      | "finality"
      | "governanceActionIsConsumed"
      | "governanceChainId"
      | "governanceContract"
      | "initialize"
      | "isFork"
      | "isInitialized"
      | "isTransferCompleted"
      | "isWrappedAsset"
      | "outstandingBridged"
      | "parseRecoverChainId"
      | "parseRegisterChain"
      | "parseUpgrade"
      | "registerChain"
      | "submitRecoverChainId"
      | "tokenImplementation"
      | "upgrade"
      | "wormhole"
      | "wrappedAsset"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bridgeContracts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "evmChainId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "finality", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceActionIsConsumed",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "governanceChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "governanceContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isFork", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isInitialized",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isTransferCompleted",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isWrappedAsset",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "outstandingBridged",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "parseRecoverChainId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "parseRegisterChain",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "parseUpgrade",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "registerChain",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "submitRecoverChainId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenImplementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgrade",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "wormhole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "wrappedAsset",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bridgeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "evmChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finality", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceActionIsConsumed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "governanceContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isFork", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInitialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTransferCompleted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWrappedAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "outstandingBridged",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseRecoverChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseRegisterChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseUpgrade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitRecoverChainId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgrade", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wormhole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wrappedAsset",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "ContractUpgraded(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface ContractUpgradedEventObject {
  oldContract: string;
  newContract: string;
}
export type ContractUpgradedEvent = TypedEvent<
  [string, string],
  ContractUpgradedEventObject
>;

export type ContractUpgradedEventFilter =
  TypedEventFilter<ContractUpgradedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface BridgeShutdown extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BridgeShutdownInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    WETH(overrides?: CallOverrides): Promise<[string]>;

    bridgeContracts(
      chainId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    chainId(overrides?: CallOverrides): Promise<[number]>;

    evmChainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    finality(overrides?: CallOverrides): Promise<[number]>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    governanceChainId(overrides?: CallOverrides): Promise<[number]>;

    governanceContract(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isFork(overrides?: CallOverrides): Promise<[boolean]>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isTransferCompleted(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isWrappedAsset(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    outstandingBridged(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    parseRecoverChainId(
      encodedRecoverChainId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BridgeStructs.RecoverChainIdStructOutput] & {
        rci: BridgeStructs.RecoverChainIdStructOutput;
      }
    >;

    parseRegisterChain(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BridgeStructs.RegisterChainStructOutput] & {
        chain: BridgeStructs.RegisterChainStructOutput;
      }
    >;

    parseUpgrade(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BridgeStructs.UpgradeContractStructOutput] & {
        chain: BridgeStructs.UpgradeContractStructOutput;
      }
    >;

    registerChain(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitRecoverChainId(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tokenImplementation(overrides?: CallOverrides): Promise<[string]>;

    upgrade(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wormhole(overrides?: CallOverrides): Promise<[string]>;

    wrappedAsset(
      tokenChainId: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  WETH(overrides?: CallOverrides): Promise<string>;

  bridgeContracts(
    chainId_: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  chainId(overrides?: CallOverrides): Promise<number>;

  evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

  finality(overrides?: CallOverrides): Promise<number>;

  governanceActionIsConsumed(
    hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  governanceChainId(overrides?: CallOverrides): Promise<number>;

  governanceContract(overrides?: CallOverrides): Promise<string>;

  initialize(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isFork(overrides?: CallOverrides): Promise<boolean>;

  isInitialized(
    impl: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isTransferCompleted(
    hash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isWrappedAsset(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  outstandingBridged(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  parseRecoverChainId(
    encodedRecoverChainId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BridgeStructs.RecoverChainIdStructOutput>;

  parseRegisterChain(
    encoded: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BridgeStructs.RegisterChainStructOutput>;

  parseUpgrade(
    encoded: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BridgeStructs.UpgradeContractStructOutput>;

  registerChain(
    encodedVM: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitRecoverChainId(
    encodedVM: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tokenImplementation(overrides?: CallOverrides): Promise<string>;

  upgrade(
    encodedVM: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wormhole(overrides?: CallOverrides): Promise<string>;

  wrappedAsset(
    tokenChainId: PromiseOrValue<BigNumberish>,
    tokenAddress: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    WETH(overrides?: CallOverrides): Promise<string>;

    bridgeContracts(
      chainId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    chainId(overrides?: CallOverrides): Promise<number>;

    evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

    finality(overrides?: CallOverrides): Promise<number>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    governanceChainId(overrides?: CallOverrides): Promise<number>;

    governanceContract(overrides?: CallOverrides): Promise<string>;

    initialize(overrides?: CallOverrides): Promise<void>;

    isFork(overrides?: CallOverrides): Promise<boolean>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isTransferCompleted(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isWrappedAsset(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    outstandingBridged(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseRecoverChainId(
      encodedRecoverChainId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BridgeStructs.RecoverChainIdStructOutput>;

    parseRegisterChain(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BridgeStructs.RegisterChainStructOutput>;

    parseUpgrade(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BridgeStructs.UpgradeContractStructOutput>;

    registerChain(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitRecoverChainId(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenImplementation(overrides?: CallOverrides): Promise<string>;

    upgrade(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    wormhole(overrides?: CallOverrides): Promise<string>;

    wrappedAsset(
      tokenChainId: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "ContractUpgraded(address,address)"(
      oldContract?: PromiseOrValue<string> | null,
      newContract?: PromiseOrValue<string> | null
    ): ContractUpgradedEventFilter;
    ContractUpgraded(
      oldContract?: PromiseOrValue<string> | null,
      newContract?: PromiseOrValue<string> | null
    ): ContractUpgradedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    bridgeContracts(
      chainId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    evmChainId(overrides?: CallOverrides): Promise<BigNumber>;

    finality(overrides?: CallOverrides): Promise<BigNumber>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceChainId(overrides?: CallOverrides): Promise<BigNumber>;

    governanceContract(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isFork(overrides?: CallOverrides): Promise<BigNumber>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isTransferCompleted(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isWrappedAsset(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    outstandingBridged(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseRecoverChainId(
      encodedRecoverChainId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseRegisterChain(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseUpgrade(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerChain(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitRecoverChainId(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tokenImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    upgrade(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wormhole(overrides?: CallOverrides): Promise<BigNumber>;

    wrappedAsset(
      tokenChainId: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    bridgeContracts(
      chainId_: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    evmChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    finality(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceActionIsConsumed(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isFork(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isInitialized(
      impl: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isTransferCompleted(
      hash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isWrappedAsset(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    outstandingBridged(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseRecoverChainId(
      encodedRecoverChainId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseRegisterChain(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseUpgrade(
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerChain(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitRecoverChainId(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tokenImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgrade(
      encodedVM: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wormhole(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrappedAsset(
      tokenChainId: PromiseOrValue<BigNumberish>,
      tokenAddress: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

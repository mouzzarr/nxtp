/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  InboxFacet,
  InboxFacetInterface,
} from "../../../../../contracts/core/connext/facets/InboxFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getConfig_notRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_assetNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__handle_notTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyRemoteRouter_notRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyReplica_notReplica",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actual",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expected",
        type: "uint256",
      },
    ],
    name: "TypedMemView__assertType_typeAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__assertValid_validityAssertionFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "TypedMemView__index_indexMoreThan32Bytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slice",
        type: "uint256",
      },
    ],
    name: "TypedMemView__index_overrun",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110ad806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e366004610e33565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff1916610500565b8c8484610515565b5050505050505050505050565b602054604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab9190610f0f565b92915050565b63ffffffff82166000908152600f6020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610827565b95945050505050565b60006101ab61020d83610864565b62ffffff1916610896565b600081600261022f815b62ffffff198416906108c3565b5061024562ffffff198516600060246001610914565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b0316610f5d565b9050600061028386610984565b60ff16905061029b62ffffff19871660248484610914565b9695505050505050565b60006101ab826003610999565b600080806102c562ffffff1986166109f8565b905060006102d862ffffff198716610a1a565b905060006102eb62ffffff198716610a3c565b9050801580156102ff575063ffffffff8216155b8015610309575082155b1561037f5730600067ffffffff0000000060208c901b1663ffffffff8b161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4600080945094505050506104f7565b600061039561038e8585610a51565b8585610a93565b90508160000361041857306001600160a01b03821667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810187905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a49450600093506104f792505050565b61042181610aa2565b610486576040516340c10f1960e01b8152306004820152602481018390526001600160a01b038216906340c10f1990604401600060405180830381600087803b15801561046d57600080fd5b505af1158015610481573d6000803e3d6000fd5b505050505b306001600160a01b03821667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810187905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a49450925050505b94509492505050565b60006101ab62ffffff19831660216020610aaf565b60008481526008602052604081205460ff169081600381111561053a5761053a610f31565b1415801561055a5750600281600381111561055757610557610f31565b14155b1561057857604051638f6bc06f60e01b815260040160405180910390fd5b600081600381111561058c5761058c610f31565b1461059857600361059b565b60015b6000868152600860205260409020805460ff191660018360038111156105c3576105c3610f31565b021790555060008581526009602090815260408083208054825181850281018501909352808352919290919083018282801561062857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161060a575b5050506000898152601e6020908152604080832054601d90925282205494955090936106579350909150610f70565b8251909150811580159061066c575080600114155b1561068a5760405163d3bd901560e01b815260040160405180910390fd5b80156107d057600061069c8287610f99565b905060005b6106ac600184610f5d565b81101561073457816000600a0160008784815181106106cd576106cd610fad565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107279190610f70565b90915550506001016106a1565b5060006107418388610fc3565b61074b9083610f70565b905080600a60008761075e600188610f5d565b8151811061076e5761076e610fad565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107c89190610f70565b909155505050505b856001600160a01b03168763ffffffff16897f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a086893360405161081593929190610fd7565b60405180910390a45050505050505050565b6000806108348385610f70565b9050604051811115610844575060005b806000036108595762ffffff199150506101d4565b6101f6858585610bba565b600061086f82610c31565b1561088c576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b60006108a182610c54565b156108bf5760405163252e0d8360e01b815260040160405180910390fd5b5090565b60006108cf8383610c90565b61090d576108dd8360d81c90565b60405163d32c1d3760e01b815264ffffffffff918216600482015290831660248201526044015b60405180910390fd5b5090919050565b60008061092a8660781c6001600160601b031690565b6001600160601b0316905061093e86610cb3565b846109498784610f70565b6109539190610f70565b11156109665762ffffff19915050610245565b6109708582610f70565b905061029b8364ffffffffff168286610827565b60006101ab62ffffff19831660246001610cec565b60008160038111156109ad576109ad610f31565b60ff166109b984610d1c565b60ff161480156101d457508160038111156109d6576109d6610f31565b6109df84610d30565b60038111156109f0576109f0610f31565b149392505050565b6000816001610a0681610222565b5061024562ffffff19851660046020610aaf565b6000816001610a2881610222565b5061024562ffffff19851660006004610cec565b60006101ab62ffffff19831660016020610cec565b60008282604051602001610a7592919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006102458484846000610d4b565b60006101ab826000610d84565b60008160ff16600003610ac4575060006101d4565b610ad78460181c6001600160601b031690565b6001600160601b0316610aed60ff841685610f70565b1115610b5557610b068460781c6001600160601b031690565b610b198560181c6001600160601b031690565b6040516378218d2960e01b81526001600160601b039283166004820152911660248201526044810184905260ff83166064820152608401610904565b60208260ff161115610b7a5760405163045df3f960e01b815260040160405180910390fd5b600882026000610b938660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b60006060601883856001600160601b03821682148015610be2575086816001600160601b0316145b610c1b5760405162461bcd60e51b815260206004820152600a602482015269085d1c9d5b98d85d195960b21b6044820152606401610904565b96831b90961790911b90941790931b9392505050565b6000601882901c6001600160601b0316610c4d60416024610f70565b1492915050565b6000610c608260d81c90565b64ffffffffff1664ffffffffff03610c7a57506001919050565b6000610c8583610cb3565b604051109392505050565b60008164ffffffffff16610ca48460d81c90565b64ffffffffff16149392505050565b6000610cc88260181c6001600160601b031690565b610cdb8360781c6001600160601b031690565b016001600160601b03169050919050565b6000610cf982602061103b565b610d04906008611054565b60ff16610d12858585610aaf565b901c949350505050565b60006101ab62ffffff198316826001610cec565b600060d882901c60ff1660038111156101ab576101ab610f31565b600481015460009063ffffffff90811690841603610d6a575082610245565b610d7385610dc3565b546001600160a01b03169050610245565b6001600160a01b038216600090815260068201602052604081205463ffffffff1615610db2575060006101ab565b50506001600160a01b03163b151590565b6000818152600760205260408120600180820154839291600160a01b90910460ff1610156101d45760405163618cca3f60e11b815260040160405180910390fd5b803563ffffffff81168114610e1857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610e4957600080fd5b610e5285610e04565b9350610e6060208601610e04565b925060408501359150606085013567ffffffffffffffff80821115610e8457600080fd5b818701915087601f830112610e9857600080fd5b813581811115610eaa57610eaa610e1d565b604051601f8201601f19908116603f01168101908382118183101715610ed257610ed2610e1d565b816040528281528a6020848701011115610eeb57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600060208284031215610f2157600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156101ab576101ab610f47565b808201808211156101ab576101ab610f47565b634e487b7160e01b600052601260045260246000fd5b600082610fa857610fa8610f83565b500490565b634e487b7160e01b600052603260045260246000fd5b600082610fd257610fd2610f83565b500690565b606080825284519082018190526000906020906080840190828801845b828110156110195781516001600160a01b031684529284019290840190600101610ff4565b50505090830194909452506001600160a01b0391909116604090910152919050565b60ff82811682821603908111156101ab576101ab610f47565b60ff818116838216029081169081811461107057611070610f47565b509291505056fea2646970667358221220329ea0b47a7a6608e0cd1630a7d58f709d39644e057e6ca7c7e75c468b82148c64736f6c63430008110033";

type InboxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxFacet__factory extends ContractFactory {
  constructor(...args: InboxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxFacet> {
    return super.deploy(overrides || {}) as Promise<InboxFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxFacet {
    return super.attach(address) as InboxFacet;
  }
  override connect(signer: Signer): InboxFacet__factory {
    return super.connect(signer) as InboxFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxFacetInterface {
    return new utils.Interface(_abi) as InboxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxFacet {
    return new Contract(address, _abi, signerOrProvider) as InboxFacet;
  }
}
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }
}

export class Geyser extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Geyser entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Geyser entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Geyser", id.toString(), this);
  }

  static load(id: string): Geyser | null {
    return store.get("Geyser", id) as Geyser | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get stakingToken(): string {
    let value = this.get("stakingToken");
    return value.toString();
  }

  set stakingToken(value: string) {
    this.set("stakingToken", Value.fromString(value));
  }

  get rewardToken(): string {
    let value = this.get("rewardToken");
    return value.toString();
  }

  set rewardToken(value: string) {
    this.set("rewardToken", Value.fromString(value));
  }

  get bonusMin(): BigInt {
    let value = this.get("bonusMin");
    return value.toBigInt();
  }

  set bonusMin(value: BigInt) {
    this.set("bonusMin", Value.fromBigInt(value));
  }

  get bonusMax(): BigInt {
    let value = this.get("bonusMax");
    return value.toBigInt();
  }

  set bonusMax(value: BigInt) {
    this.set("bonusMax", Value.fromBigInt(value));
  }

  get bonusPeriod(): BigInt {
    let value = this.get("bonusPeriod");
    return value.toBigInt();
  }

  set bonusPeriod(value: BigInt) {
    this.set("bonusPeriod", Value.fromBigInt(value));
  }

  get createdTimestamp(): BigInt {
    let value = this.get("createdTimestamp");
    return value.toBigInt();
  }

  set createdTimestamp(value: BigInt) {
    this.set("createdTimestamp", Value.fromBigInt(value));
  }

  get createdBlock(): BigInt {
    let value = this.get("createdBlock");
    return value.toBigInt();
  }

  set createdBlock(value: BigInt) {
    this.set("createdBlock", Value.fromBigInt(value));
  }
}
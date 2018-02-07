import { MetaData } from "./meta_data";
import { NoOp } from "./string_transforms";

export * from "./serialize";
export * from "./deserialize";
export * from "./annotations";
export * from "./string_transforms";
export {Instances} from './util';

export function SetSerializeKeyTransform(fn : (str : string) => string) : void {
  if(typeof fn === "function") {
    MetaData.serializeKeyTransform = fn;
  }
  else {
    MetaData.serializeKeyTransform = NoOp;
  }
}

export function SetDeserializeKeyTransform(fn : (str : string) => string) : void {
  if(typeof fn === "function") {
    MetaData.deserializeKeyTransform = fn;
  }
  else {
    MetaData.deserializeKeyTransform = NoOp;
  }
}
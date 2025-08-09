import { compose } from "@/compose";
import { TClassConstructor } from "@/interfaces/ClassConstructor.t";
import { HasCastableConcern } from "./HasCastableConcern";
import { IHasCastableConcern } from "./types.t";

export const BaseCastable: TClassConstructor<IHasCastableConcern> = compose(class {}, HasCastableConcern)
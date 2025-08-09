import { TClassConstructor } from "@/interfaces";
import { Castable } from "./Castable";
import { TCastableType } from "./types.t";

export const HasCastableConcern = (Base: TClassConstructor) => {
    return class extends Base {

        castable = new Castable();

        getCastFromObject<ReturnType = unknown>(data: Record<string, unknown>, casts = this.casts): ReturnType {
            return this.castable.getCastFromObject(data, casts);
        }

        getCast<T = unknown>(data: unknown, type: TCastableType): T {
            return this.castable.getCast(data, type);
        }

        isValidType(type: TCastableType): boolean {
            return this.castable.isValidType(type);
        }

        casts = {};
    
    }
}
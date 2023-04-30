// import { GraphQLError, GraphQLScalarType, Kind } from "graphql";
import { Resolvers } from "../../../../__generated__/graphql.js";
import { DateTimeResolver } from "graphql-scalars";

export const resolvers: Resolvers = {
  DateTime: DateTimeResolver,
};

// 手動バージョン
// function validateDateTime(value: string) {
//   const RFC_3339_REGEX =
//     /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;

//   const dateTimeString = value.toUpperCase();

//   if (!RFC_3339_REGEX.test(dateTimeString)) {
//     return false;
//   }

//   return true;
// }

// export const resolvers: Resolvers = {
//   DateTime: new GraphQLScalarType({
//     name: "DateTime",
//     description: "DateTime custom scalar type",
//     serialize(value) {
//       // データベースからクライアントに値を変えるときに呼ばれる
//       return value;
//     },
//     parseValue(value) {
//       // クライアントから渡されるデータ(自分で作ったtype)を加工する
//       if (typeof value === "string") {
//         if (!validateDateTime(value)) {
//           throw new GraphQLError(
//             `DateTime cannot represent an invalid date-time-string ${value}`
//           );
//         }

//         return new Date(value);
//       }
//     },
//     parseLiteral(ast) {
//       // クライアントから渡されるデータ(stringなどもともとあるtype)を加工する

//       // astにvalueのプロパティがなければエラー
//       if (!("value" in ast)) {
//         return new GraphQLError("");
//       }

//       const { value } = ast;

//       // valueがstringでなければエラー
//       if (ast.kind !== Kind.STRING || typeof value !== "string") {
//         throw new GraphQLError(
//           `DateTime cannot represent an invalid date-time-string ${value.toString()}`
//         );
//       }

//       // valueがDateTimeに変換不可能であればエラー
//       if (!validateDateTime(value)) {
//         throw new GraphQLError(
//           `DateTime cannot represent an invalid date-time-string ${value.toString()}`
//         );
//       }

//       return new Date(value);
//     },
//   }),
// };

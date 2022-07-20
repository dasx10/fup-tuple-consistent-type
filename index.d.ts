type TupleConsistent <Tuple extends readonly unknown[]> = Tuple extends readonly [...infer StartValues, unknown]
    ? Tuple | TupleConsistent<StartValues>
    : readonly [];

export default TupleConsistent;
export function addN(a :number) :Function {
    return (b :number) :number =>  {
        return a + b;
    }
}
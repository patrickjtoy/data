// module tuple exposing (of, first, second, mapFirst, mapSecond)

class Tuple {
    constructor(first, second) {
        const _first = first;
        const _second = second;

        this.getFirst = () => _first;
        this.getSecond = () => _second;
    }

    toString() {
        const f = this.getFirst().toString();
        const s = this.getSecond().toString();
        return `Tuple(${f}, ${s})`;
    }
}

// of : a -> b -> Tuple<a, b>
const of = (first, second) => new Tuple(first, second);

// first : Tuple<a, b> -> a
const first = tuple => tuple.getFirst();

// second : Tuple<a, b> -> b
const second = tuple => tuple.getSecond();

// mapFirst : (a -> b) -> Tuple<a, b> -> Tuple<b, b>
const mapFirst = (mapper, tuple) => of(mapper(tuple.getFirst()), tuple.getSecond());

// mapSecond : (b -> c) -> Tuple<a, b> -> Tuple<a, c>
const mapSecond = (mapper, tuple) => of(tuple.getFirst(), mapper(tuple.getSecond()));

export default { of, first, second, mapFirst, mapSecond };
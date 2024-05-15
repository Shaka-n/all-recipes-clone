import _ from "lodash";

enum MaybeType {
  Just = 'maybe-type__just',
  Nothing = 'maybe-type__nothing'
}

interface Just<T> {
  type: typeof MaybeType.Just,
  value: T
}

interface Nothing {
  type: typeof MaybeType.Nothing
}


const Nothing = (): Nothing => ({
  type: MaybeType.Nothing
})

const Just = <T>(value: T): Just<T> => ({
  type: MaybeType.Just,
  value,
})

// Maybe, where the value of Just is a function call rather than a literal value
function maybeMap <A, B> (f: (val: A) => B, m: Maybe<A>): Maybe<B> {
  switch (m.type) {
    case MaybeType.Nothing:
      return Nothing()
    case MaybeType.Just:
      return Just(f(m.value))
  }
}

// Maybe, and if there is a value, do some function 
function maybeAndThen<A, B> (f: (val: A) => Maybe<B>, m: Maybe<A>): Maybe<B> {
  switch(m.type) {
    case MaybeType.Nothing:
      return Nothing()
    case MaybeType.Just:
      return f(m.value)
  }
}
// Maybe, where undefined and null are strictly Nothing
function maybeOf<T> (value: T): Maybe<T> {
  if ( value === undefined || value === null ) {
    return Nothing()
  }
  else {
    return Just(value)
  }
}

// Maybe, with a default value
function maybeWithDefault<T> (defaultVal: T, m: Maybe<T>): T {
  switch (m.type) {
    case MaybeType.Nothing:
      return defaultVal
    case MaybeType.Just:
      return m.value
  }
}

export type Maybe<T> = Just<T> | Nothing

export const Maybe = {
  andThen: _.curry(maybeAndThen),
  map: _.curry(maybeMap),
  of: _.curry(maybeOf),
  withDefault: _.curry(maybeWithDefault)
}
# Unit testing, best practices

- webdev wtf
- github
- outline
- motivation
  - when how
  - tips for starting asap
  - tests, types, lint rules

- testing "pyramid"
- paradigms (tdd, bdd)

- best practices (quick)
  - write tests, know code coverage (real, reported)
  - know what you are testing
    - logic
    - contracts, erity
    -


- simple node js demo (backend, desktop app, simple cli app)
  - js frameworks for testing (ava, jest, karma jasmine, mocha)
  - popular extensions (chai)
  - mocks, stubs, spies (don't forget to update mocks), fixtures
  - testing requests (sinon)

- simple react demo
  - more complex tests
  - using jest
  - coverage (is not always coverage)
  - enzyme

- best practices (recap)
  - tests have to be fast
  - not flaky
  - readable
  - write testable code
    - follow kiss and dry
    - composability
    - lessons from fp
      - pure functions
      - immutable data structures
    - separate your logic from other components (ui, requests, logging, tracking)
  - 1 assert (expect) per test
  - anti patterns!
    - testing internal implementation (especailly when not following fp)
    - not converting production bugs to test cases
  - lints for tests
  - integrate into CI

- demo in very large app
  - hacky z avo (emittery a callbacky v testoch)

- recap
 - pyramid, paradigms, best practices
 - frontend
 - backend
 - teser


- resources
 - https://www.youtube.com/watch?v=Af4M8GMoxi4&list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw&index=9
 - egghead jest / testing series
 - AssertJS conference
 - Martin Fowler's patterns in SW development
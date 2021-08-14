const { of, from, range, generate } = rxjs;

// 스트림 할당
const obs1$ = of(1, 2, 3, 4, 5);

// 배열을 스트림으로 할당
const obs2$ = from([6, 7, 8, 9, 10]);

// 11부터 11, 12, 13, 14, 15만큼 스트림으로 할당
const obs3$ = range(11, 5);

// 스트림 생성
const obs4$ = generate(
  15,
  (x) => x < 30,
  (x) => x + 2,
);

// obs1$.subscribe((item) => console.log(`of: ${item}`));
// obs2$.subscribe((item) => console.log(`from: ${item}`));
// obs3$.subscribe((item) => console.log(`range: ${item}`));
// obs4$.subscribe((item) => console.log(`generate: ${item}`));

// 시간에 의한 스트림
const { interval, timer } = rxjs;

const timeObs1$ = interval(1000); // 1초에 한번씩 스트림생성
const timeObs2$ = timer(3000); // 3초에 한번만 생성

// timeObs1$.subscribe((item) => console.log(`interval :: ${item}`));
// timeObs2$.subscribe((item) => console.log(`timer :: ${item}`));

// 이벤트에 의한 스트림

const { fromEvent } = rxjs;
const { map } = rxjs.operators;

const eventObs1$ = fromEvent(document, 'click').pipe(map(({ x }) => x));

eventObs1$.subscribe((item) => console.log(item));

// Observable 은 lazy
// 누군가 구독을 해야 발행을 시작함
// 그리고 발행물은 각 구독자들에게 따로 발행이 된다

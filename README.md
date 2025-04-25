# #1

Напишите и типизируйте функцию, рассчитывающую стоимость с учетом скидки и рассрочки на заданное количество месяцев:

```javascript
const totalPrice = ({ price, discount, isInstallment, months }) => {
    // Your code here...
};

const price = totalPrice({
    price: 100000,
    discount: 25,
    isInstallment: true,
    months: 12,
});
console.log(price); // 6250
```

Настроил конфигурационный файл _tsconfig.json_.<br />
Отвел от main ветку _feature/calculate-price_.<br />
Создал файл _calculatePrice.ts_.<br />
Написал функцию _totalPrice_, проверяющую наличие рассрочки и в зависимости от этого возвращающую стоимость.<br />
Типизировал функцию _totalPrice_ с помощью интерфейса _TotalPriceData_.<br />
Отправил ветку на удаленный репозиторий.

# #2

Напишите и типизируйте функцию, нормализующую входящие данные:

```javascript
const posts = [
    {
        id: '62e69d5a5458aac0ed320b35',
        title: 'id labore ex et quam laborum',
        body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium',
    },
    {
        id: '62e69d5a5458aac0ed320b1c',
        title: 'quo vero reiciendis velit similique earum',
        body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et',
    },
    {
        id: '62e69d5a5458aac0ed320b32',
        title: 'odio adipisci rerum aut animi',
        body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione',
    },
    {
        id: '62e69d5a5458aac0ed320b39',
        title: 'alias odio sit',
        body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati',
    },
    {
        id: '62e69d5a5458aac0ed320b53',
        title: 'vero eaque aliquid doloribus et culpa',
        body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et',
    },
    {
        id: '62e69d5a5458aac0ed320b19',
        title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
        body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in',
    },
    {
        id: '62e69d5a5458aac0ed320b25',
        title: 'repellat consequatur praesentium vel minus molestias voluptatum',
        body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor',
    },
];

const normalizeData = unnormalizedData => {
    // Your code here...
};

console.log(normalizeData(posts));
/**
 * {
 *    byId: {
 *        62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *        62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *        ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */
```

Отвел от main ветку _feature/normalize-data_.<br />
Создал файл _normalizeData.ts_.<br />
Написал функцию _normalizeData_, нормализующую входящие данные.<br />
Типизировал функцию _normalizeData_ с помощью интерфейсов _UnnormalizedData_ и _NormalizedData_.<br />
Отправил ветку на удаленный репозиторий.

# #3

Напишите и типизируйте функцию, выполняющую запрос за данными по переданному URL. Выведите их в консоль в формате: "ID: _id_, Email: _email_".

```javascript
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = url => {
    // Your code here...
};

getData(COMMENTS_URL).then(data => {
    // Your code here...
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
```

Отвел от main ветку _feature/execute-request_.<br />
Создал файл _executeRequest.ts_.<br />
Написал функцию _getData_, выполняющую запрос за данными по переданному URL и возвращающую промис.<br />
Обработал полученный промис с помощью then и catch.<br />
Написал функцию _setCommentsFormat_, устанавливающую формат "ID: _id_, Email: _email_".<br />
Типизировал обе функции с помощью дженерика _Response_ и интерфейса _Comment_.<br />
Отправил ветку на удаленный репозиторий.

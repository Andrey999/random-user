import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { HomePage, AboutPage, CartPage, ContactsPage, FavoritesPage, AuthPage } from '../index';
import { BookHeader } from '../bookHeader/BookHeader';
import { BarChart } from './../BarChart';
import './App.css';


export const App = () => {
    const state = [
        { name: 'Mon', value: 20 },
        { name: 'Tue', value: 40 },
        { name: 'Wed', value: 35 },
        { name: 'Thu', value: 50 },
        { name: 'Fri', value: 55 },
        { name: 'Sat', value: 40 },
        { name: 'Sun', value: 30 }
    ]

    // console.log(undefined == 0);
    // console.log(undefined === 0);
    // console.log(undefined >= 0);
    // console.log(null >= 0);
    // console.log(false == 0);
    // String.prototype.capitalize = function () {
    //     return this.charAt(0).toUpperCase() + this.slice(1)
    // }

    // String.prototype.capitalize = function () {
    //     return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
    // }

    // console.log('num: ', 'andrey'.capitalize());

    // // num.minus(1)

    // function getStr() {
    //     console.log([].slice.call(arguments, 1).join('*'));

    //     return [].slice.call(arguments, 1).join(arguments[0])
    // }
    // console.log('func: ', getStr('*', '1', 'b', '1c'))
    // var tree1 = {
    //     valueNode: 1,
    //     next: [
    //         {
    //             valueNode: 3,
    //             next: null
    //         },
    //         {
    //             valueNode: 2,
    //             next: null
    //         }
    //     ]
    // }

    // var sum = 0;

    // function getSum(obj) {
    //     sum += obj.valueNode;
    //     if (obj.next != null) {
    //         for (var i = 0; i < obj.next.length; i++) {
    //             console.log(obj.next[i]);

    //             getSum(obj.next[i]);
    //         }
    //     }

    //     return sum;
    // }
    // console.log(getSum(tree1))

    // const isName = (s1, s2) => {
    //     let letter1 = s1.split('').sort();
    //     let letter2 = s2.split('').sort();
    //     console.log(letter1, letter2);

    //     return letter1.join() === letter2.join();

    // }

    // console.log(isName('dog', 'dgo'))
    // console.log(isName('dog', 'dggo'))
    // console.log(isName('smoke', 'somke'))

    // for (var i = 0; i < 10; i++) {
    //     var it = i;
    //     setTimeout(() => {
    //         console.log(it);
    //     }, 100);
    // }

    // function foo() {
    //     console.log(this);
    // }
    // foo()

    // let obj = {
    //     surname: "Gromov",
    //     name: () =>  this.surname
    // }
    // let num = 5;
    // function addTwo(num: number) {
    //     // на этапе создания контекста - {num: 5}
    //     num += 2; // на этапе выполнения контекста, эта строка изменит запись на {num: 7}
    //     // console.log('num: ', num);

    //     return num; // вернуть результатом функции новое значение
    // }

    // num = addTwo(num); // присвоить результат функции как новое значение переменной
    // console.log(num); // 


    // const func = () => {
    //     console.log(this)
    // }
    // const multiArr = [ 0, [1, 2, [3, 4] ], [ 5, 6 ], [ 7, 8 ], 9 ]
    // const flatArr = (arr) => {
    //     let result = [];
    //     arr.forEach(el => {
    //         if(Array.isArray(el)) {
    //             console.log('el if: ', ...el);
    //             result = [...result, ...flatArr(el)]
    //         }

    //         else {
    //             console.log('el else: ', el);
    //             result = [...result, el]
    //         }
    //     })
    //     console.log('result: ', result)
    //     return result;
    // }

    // console.log(flatArr(multiArr));

    // let group = {
    //     title: "Our Group",
    //     students: ["John", "Pete", "Alice"],

    //     showList() {
    //         let that = this;
    //         this.students.forEach(function (student) {
    //             console.log(student);


    //             // Error: Cannot read property 'title' of undefined
    //             console.log(that.title + ': ' + student)
    //         });
    //     }
    // };

    // group.showList();

    const arr = [ {name: "a", value: 1}, {name: "b", value: 2}, {name: "c", value: 3} ]
    
    const foo = (arr: Array<{name: string, value: number}>) => {
        return arr.reduce((acc: {}, item: {name: string, value: number}) => {
            return { ...acc, [item.name]: item.value }
        }, {})
    }
    console.log(foo(arr));
    

    // const arr = [ {name: "a", value: 1}, {name: "b", value: 2} ]

// {a: 1, b: 2}


    // const fooArr = (arr) => {
        // const a = arr.reduce((acc, items) => {
            
        //     console.log('acc: ', acc)
        //     console.log('items: ', items)
        // }, {})
        // console.log(a);
        
        // let a = arr.map(arr => ({ arr }));
        // console.log(a);
        // return 
        // return a;
    // }

    // fooArr(arr);




    return (
        <Fragment>
            <BookHeader />
            <div className="container">
                {/* <BarChart state={state} /> */}
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contacts" component={ContactsPage} />
                    <Route path="/favorites" component={FavoritesPage} />
                    <Route path="/auth" component={AuthPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Fragment>
    );
};
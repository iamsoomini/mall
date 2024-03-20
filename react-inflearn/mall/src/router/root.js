import {Suspense, lazy} from 'react';

const { createBrowserRouter } = require('react-router-dom');

const Loading = <div>Loading...</div>;
const Main = lazy(() => import('../pages/MainPage'));
const About = lazy(() => import('../pages/AboutPage'));
const TodoIndex = lazy(() => import('../pages/todo/IndexPage'));
const TodoList = lazy(() => import('../pages/todo/ListPage'));

const root = createBrowserRouter([
    {
        path: '/',
        element: <Suspense fallback={Loading}><Main /></Suspense>
    },
    {
        path: 'about',
        element: <Suspense fallback={Loading}><About /></Suspense>   
    },
    {
        path: 'todo',
        element: <Suspense fallback={Loading}><TodoIndex /></Suspense>,
        // 아울렛에 해당함. 
        children: [
            { path: 'list', element: <Suspense fallback={Loading}><TodoList /></Suspense>},
        ]
    }
])

export default root;



// 코드 스플리팅 => 필요할때까지 로딩하지 않는 것. 
// react는 기본적으로 싱글 페이지 어플리케이션이라 새로고침을 원하지 않음. 
// 다른 페이지 뜰 동안 loading 보여줌. 


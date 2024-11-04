import React from 'react';
import { useCookies } from 'react-cookie'
import { Navigate } from 'react-router-dom';

export const RouteMiddleware: React.FC<{ children: React.ReactNode, type: 'public' | 'private' }> = ({ children, type }) => {
    const [cookies] = useCookies(['token']);

    const cookieCondition = type === 'private' ? !!cookies.token : type === 'public' ? !cookies.token : true
    const pathObj = {
        public: '/dash',
        private: '/auth'
    }
    return cookieCondition ? children : <Navigate relative='route' to={pathObj[type]} />

}
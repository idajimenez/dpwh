import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import routes from '../../config/routes';
import AppLoadingContainer from '../AppLoading/AppLoadingContainer';
import AppModal from '../../components/base/Modal/Modal';
import FlashNotification from '../../components/modules/FlashNotification/FlashNotification';
import WrapperBackground from '../../components/base/WrapperBackground/WrapperBackground';
import { clearModalContent } from '../../redux/modules/modalEvent';

const loading = () => (
    <WrapperBackground>
        <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
        </Spinner>
    </WrapperBackground>
);

function App() {
    const dispatch = useDispatch();
    const { modalContent, onToggle, ...modalEvent } = useSelector(({ modalEvent }) => modalEvent);

    const handleCloseModal = () => {
        dispatch(clearModalContent());
        onToggle && onToggle();

        // To show modal, do this something like this:
        // dispatch(setModalContent({
        //     modalContent: <LoginContainer />,
        //     title: 'Login'
        // }));
    };

    return (
        <AppLoadingContainer>
            <div id='outer-container'>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </React.Suspense>
            </div>

            <FlashNotification/>
            <AppModal
                {...modalEvent}
                isShow={!!modalContent}
                onToggle={handleCloseModal}>
                {modalContent}
            </AppModal>
        </AppLoadingContainer>
    );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )} />
    );
}

export default App;

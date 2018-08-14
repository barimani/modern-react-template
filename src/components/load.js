import React from 'react';
import Loadable from 'react-loadable';
import LoadingImage from 'assets/loading.gif';

/**
 * A functional component that is used for code-splitting
 * @param url for the required component to lazy-load
 */

const LazyComponent = () => <div>
        <img src={LoadingImage}/>
    </div>;

export default url => Loadable({
    loader: () => import('../' + url),
    loading: LazyComponent
});
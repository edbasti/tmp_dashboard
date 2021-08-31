import ErrorBoundary from './error-boundary';
import ContentEl from './content';
import FooterEl from './footer';
import HeaderEl from './header';

// we need to manually export the imports again
// an ECMAScript proposal is coming, currently: stage 1
// https://github.com/tc39/proposal-export-default-from
export {
    ContentEl,
    FooterEl,
    HeaderEl,
    ErrorBoundary 
};

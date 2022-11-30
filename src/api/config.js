import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
        addPlugin({ queryClient });
    });
}

export default queryClient;

const stack = {
    headerShown: false,
};

const tab = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: '#483d8b',
    tabBarStyle: { 
        backgroundColor: 'rgb(07,25,51)',
        borderTopWidth: 0,
        height: Platform.OS === 'ios' ? 85 : 60,
    },
};

export default {
    stack,
    tab
};
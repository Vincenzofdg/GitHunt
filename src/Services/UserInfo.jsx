import GitHub from "./url";

export const UserInfo = async (username) => {
    try {
        const { data } = await GitHub.get(`/users/${username}`,);
        return data
    } catch (error) {
        console.error('Erro ao buscar o usuário:', error);
    }
};

export default UserInfo;
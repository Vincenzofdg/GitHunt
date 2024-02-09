import GitHub from "./url";

export const UserInfo = async (username) => {
    try {
        const { data } = await GitHub.get(`/users/${username}/repos`,);
        return data
    } catch (error) {
        console.error('Erro ao buscar o repositorios:', error);
    }
};

export default UserInfo;

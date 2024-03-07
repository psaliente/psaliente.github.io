
export const useMyInfoService = () => {

    function getMyInfo() {
        return {
            Name: "Peter John C. Saliente",
            Description: "Hi, welcome to my online portfolio where you can see the list of projects that I have participated throughout the span my software development and engineering career. I had been in the IT Industry since 2011 and then went on to do software development three years later."
        }
    }

    return {
        getMyInfo
    }
}
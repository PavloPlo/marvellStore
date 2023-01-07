class MarvellService {

    async function getResource(url) {
        let res = await fetch(url)
    }
    if(!res.ok){
        throw
}
}
import { heroes } from "../data/heroes";

/**
 * @param {HTMLDivElement} element
 */
export const callBacksComponent = (element) => {

    const id = "5d86371fd55e2e2a30fe1ccb1xxx";

    findHero( id, ( error, hero ) =>{

        if (error){
            element.innerHTML = error;
            return;
        }

        // element.innerHTML = hero?.name
        // element.innerHTML = hero?.name || "No hay heroe"
        element.innerHTML = hero.name
    } )

};

/**
 * @param {String} id 
 * @param {(error: String|null , hero: Object )=> void} callback 
 */
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );

    if( !hero ){
        callback(`Hero with id ${ id } not found`);
        return; // undefined
    }

    callback( null, hero )
}
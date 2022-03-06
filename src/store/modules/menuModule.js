export default ({
    state: {
        menu:[
          {label:"Dashboard", icon:['fa', 'house'], iconsize:'xs', routeName:'Dashboard'},
          {label:"Profile", icon:['fa', 'user-tie'], iconsize:'xs', routeName:'Profile'},
          {label:"Setting up", icon:['fa', 'gears'], iconsize:'xs', routeName:'Setting-up'},
          {label:"Users", icon:['fa', 'users'], iconsize:'xs', routeName:'User'},
          {label:"Members", icon:['fa', 'user-group'], iconsize:'xs', routeName:'Member'},
          {label:"Article", icon:['fa', 'newspaper'], iconsize:'xs', routeName:'Article'},
          ]
    },
    getters:{
        MENU: state=>{
          return state.menu
        }
    },
    mutations: {
      SET_MENU:(state, data)=>{
        state.menu = data
      }
    },
    actions: {
      /*GET_MENU: (context)=>{
        context.commit('')
      }*/
    },
  })
  
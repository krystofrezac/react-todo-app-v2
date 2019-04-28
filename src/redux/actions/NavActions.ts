const NavActions={
  setId:(id:string)=>{
      return{
          type:"SET_SELECTED_ID_NAV",
          id
      }
  }
};

export default NavActions;
import type {GetStaticProps, NextPage} from 'next'
import LoginPage from "../src/components/LoginPage";
import {getusers} from "../src/helpers/helpers";
import {DataContext} from './../src/helpers/context'





export const getStaticProps:GetStaticProps = async () => {
    const props = await getusers();

    return {
        props: {props},
    }
}

const Home: NextPage = ({props}:any):JSX.Element => {

  return (
   <>
       <DataContext.Provider value={props}>
           <LoginPage />
       </DataContext.Provider>

   </>
  )
}

export default Home

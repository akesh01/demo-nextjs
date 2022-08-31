import { style } from '@mui/system'
import React from 'react'
import styles from '../styles/AddUserModal.module.css'

interface UserModalProps {
    openModal : boolean ,
    setOpenModal :any
}
const AddUserModal = ({openModal,setOpenModal} :UserModalProps) => {
 return (
    <>
    {openModal?
    <div id="myModal" className={styles.modal}>

            <div className={styles.modalcontent}>
              <div className={styles.modalheader}>
                <span className={styles.close}>&times;</span>
                <h2>Invite User</h2>
                <hr />
              </div>
              <div className={styles.modalbody}>
               <form action="">
                <div>
                  <p>Name</p>
                  <input style={{background:"#ffffff",color:"black"}} type="text" name="" id="" />
                </div>
                <div>
                  <p>Email</p>
                  <input style={{background:"#ffffff",color:"black"}} type="text" name="" id="" />
                </div>
                <div style={{display:"flex",flexDirection:"row",alignContent:"space-around",alignItems:"center"}}>
                  <div>
                  <p>Phone Number</p>
                  <input style={{background:"#ffffff",color:"black",marginRight:"250px"}} type="text" name="" id="" />
                  </div>
                  <div>
                  <p>Role</p>
                  <input style={{background:"#ffffff",color:"black"}} type="text" name="" id="" />
                  </div>
                </div>
                <div>
                    <button>+ Add Another</button>
                  </div>

               </form>
              </div>

              <div className={styles.modalfooter}>
                <div style={{padding:"50px"}}>
                  <button>Cancel</button>
                </div>
                <div>
                  <button>Invite User</button>
                </div>
              </div>
            </div>

        </div>
      :
      <div>

      </div>
    }
    </>
  ) 


}

export default AddUserModal
import { useState } from 'react';
import BankAccountDetails from './BankAccountDetails';



const AddAccountBtn = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function handleOpenModal() {
        setModalIsOpen(true);
    }

    function handleCloseModal() {
        setModalIsOpen(false);
    }

    return (
        <>
        {/* <CashSlipdetails/> */}
        <div>
            <img
                onClick={handleOpenModal}
                style={{
                    height: "7vh",
                    position: "fixed",
                    right: "3%",
                    bottom: "5%",
                    display:modalIsOpen?"none":"block"
                }}
                src="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
                alt="CashSlip"
            />
            <BankAccountDetails isOpen={modalIsOpen} onClose={handleCloseModal} />
        </div>
       
        </>
    );
}

export default AddAccountBtn;
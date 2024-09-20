const Btn = ({ text, customStyles }) => {
    return (
        <button className={`px-4 py-2 rounded-3xl ${customStyles}`}>
            {text}
        </button>
    );
};

export default Btn;

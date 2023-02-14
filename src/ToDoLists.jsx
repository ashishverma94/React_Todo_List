import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';const ToDoLists = (props) => {
    

    return (
        <>
            <div className='todo_style'>
                <HighlightOffSharpIcon style ={{
                    color:'red',
                }}
                    onClick={()=>{
                        props.onSelect(props.id) ;
                    }}
                    />
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoLists ;
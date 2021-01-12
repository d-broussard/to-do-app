import Vue from 'vue'

interface TodoListItemProps {
    todo: {
        text: String,
        complete: Boolean;
    };
}


export const TodoListItem: Nod = props => {
    return <li>Content</li>;    
};
import isEqual from "react-fast-compare";
import {Tools} from '../../Utils';

export const useFormElement = (props)=>{
    let rand = (new Date()).getTime() + Math.ceil(Math.random()*10000);
    let Element = {
        props: props,

        state: {
            rand: rand,
            errorRand: rand,
            id: 'element-'+rand,
            previousRef: null,
            ignoreError: false,
        },

        getRand: function(){
            return this.state.rand;
        },
    
        shouldComponentUpdate: function(nextProps, nextState){
            let changed = false,
                changedProps = [],
                // propsNeedsTocheck = ['defaultValue', 'label', 'children', 'error', 'className', 'data', 'multiple', 'disabled'],
                propsNeedsTocheck = ['defaultValue', 'label', 'data', 'children', 'className', 'multiple', 'disabled'],
                proceed = (element)=>{
                    changed = true;
                    changedProps.push(element);
                    this.getCurrentRef();
                };
            if(nextProps.error != undefined){
                proceed();
            }
    
            if(nextState.currentType){
                if(nextState.currentType != this.state.currentType){
                    this.getPreviousRef();
                    return true;
                }
            }
    
            propsNeedsTocheck.forEach((key)=>{
                if(typeof nextProps[key] != typeof this.props[key]) {
                    proceed(key);
                }
                else if(Tools.isArray(nextProps[key])){
                    if(nextProps[key].length != this.props[key].length){
                        proceed(key);
                    }
                    else if(key == "children" && nextProps.children != undefined){
                        if(!isEqual(nextProps.children, this.props.children)){
                            proceed(key);
                        }
                    }
                    else if(this.props[key] != undefined){
                        nextProps[key].forEach((item, index)=>{
                            if(!isEqual(item, this.props[key][index])){
                                proceed(key);
                            }
                        });
                    }
                }
                else if(nextProps[key] instanceof Object){
                    let str1 = JSON.stringify(nextProps[key]);
                    let str2 = JSON.stringify(this.props[key]);
    
                    if(str1 != str2){
                        proceed(key);
                    }
                }
                else{
                    if(nextProps[key] != this.props[key]){
                        proceed(key);
                    }
                }
            });
    
            return(changed);
        },
    
        checkError: function(){
            let {errors} = this.props.refItem[0]?.state,
                {refItem} = this.props,
                {errorRand} = this.state,
                divError = [];

            if(errors!=undefined){
                let error = errors[refItem[1]];
                if(error == undefined) 
                    return divError;
                this.getPreviousRef();
                let err = error.join('<br/>');
                this.state.ignoreError = false;
                let elementNew = <div className="pristine-error text-theme-24 mt-2" key={errorRand} id={'error-'+errorRand}>
                                    <span dangerouslySetInnerHTML={{__html: err}} /> 
                                </div>
                divError.push(elementNew);
            }
            return divError;
        },

        createRef: function(refItem){
            const ref = (el) => {
                let {state, setState} = refItem[0];
                let newRef = state.refs;
                newRef.current[refItem[1]] = el;
                state.refs = newRef;
                return newRef.current[refItem[1]];
            }
            return ref;
        },

        createRand: function(){
            return (new Date()).getTime() + Math.ceil(Math.random()*10000);
        },
    
        getParent: function(){
            var parent = this._reactInternalFiber._debugOwner.stateNode;
            return parent;
        },
    
        getRefName: function(){
            var name = this._reactInternalFiber.ref._stringRef;
            return name;
        },
    
        removeError: function(rand=""){
            // let {rand} = this.state;
            // let parent = this.getParent();
            // let {errors} = parent.state;
            // let refName = this.getRefName();
            // delete errors[refName];
            // parent.setState({errors});
    
            let {errorRand} = this.state;
            let id = this.getId();
            if((window?.$('#error-'+errorRand)).length > 0){
                window?.$('#error-'+errorRand).slideUp(400, ()=>{
                    this.state.errorRand = this.createRand();
                });
            }
            window?.$("#"+id).parent().children("span").children("div").slideUp(400, function(){
                this.state.errorRand = this.createRand();
            });
        },
    
        getCurrentRef: function(){
            let {refItem} = this.props,
                {state} = refItem[0],
                {refs} = state;
            return this.state.previousRef = refs[refItem[1]];
        },
    
        getPreviousRef: function(){
            return (this.state.previousRef != null) ? this.state.previousRef.value : "";
        },
    
        getDefaultValue: function(){
            let [component, name] = this.props.refItem;
            let {defaultValue} = this.props;
            if(component.state.info?.[name] != undefined)
                defaultValue = component.state.info?.[name];
            let value = defaultValue;
            if(this.getPreviousRef()){
                value = this.getPreviousRef();
            }
            if(typeof value == "object" && value != null){
                let newVal = [];
                value.map((item)=>{newVal.push(item?.id)});
                value = newVal;
            }
            return value;
        },
    
        getHelp: function(){
          let {help} = this.props;
          if(help)
            return <a href='#' alt={help}><i className="fa fa-question-circle" aria-hidden="true"></i></a>;
    
          return '';
        },
    
        getRequired: function(){
          let {required} = this.props;
          if(required == "true" || required === true)
            return <sup className="required text-danger"> * </sup>;
    
          return '';
        },
    
        getId: function(){
            return this.props.id || this.props.refItem[1] || this.state.id;
        },
    
        getLabel: function(){
            let {label, refItem} = this.props;
            return label?label:refItem[1];
        },
    
        getPlaceHolder: function(props){
            let {placeholder} = this.props;
            return (placeholder)?placeholder : "";
        },

        init: function(){
            return {
                id: Element.getId(),
                rand: Element.getRand(),
                label: Element.getLabel(),
                helpDiv: Element.getHelp(),
                divError: Element.checkError(),
                requiredDiv: Element.getRequired(),
                placeholder: Element.getPlaceHolder(),
                defaultValue: Element.getDefaultValue(),
            };
        }
    };

    // return Element.init();
    return Element;
};
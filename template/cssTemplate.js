const file = () => {

    return `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
    
    
/* top section */
    
.topSectionContainer {
    margin: 10px 0 10px 0;
    background-color: #EBECF1;
    height: 150px;
    padding-top: 4%;
}
    
h1 {
    text-align: center;
}
    
    
    /* card section */
    
.cardSectionContainer {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
    
.card {
    width: auto;
    border: 1px solid #dde1f2;
    height: auto;
}
    
.cardHeader {
    background-color: #EBECF1;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dde1f2
}
    
.name,
.rule {
    margin: 2px 0px 0px 10px
}
    
.name {
    margin-top: 0
}
    
.cardBody {
    margin: 10px
}
    
.id,
.email,
.office {
    margin: 0 5px 0 5px;
    padding: 10px 0 10px 10px;
    border: 1px solid #dde1f2
}`
}
module.exports = file()
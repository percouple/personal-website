import React, {useState} from "react";
import styled from "styled-components";

const BlogCard = styled.div`
border-style: solid;
border-width: thin;
border-radius: 20px;
margin: 10px;
display: flex;
max-height: 38vh;
max-width: 800px;
transition: .5s ease-out;

&:hover{
    background-color: #B0B0B0;
}
`

const BlogContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
border-style: solid;
border-width: thick;
margin: 10px;
`

const StyledText = styled.span`
text-align: left;
padding: 10px
`

const StyledImage = styled.img`
border-radius: 20px 0 0 20px;
max-width: 30vw;
`


export default function Thoughts({ blogData }) {
    
    function getMonthName(monthNumber) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('en-US', { month: 'long' });
    }

    function getDaySubscript(day) {
        let lastDigit;
        if (day.length === 2) {
            lastDigit = day[1];
        } else if (day.length === 1) {
            lastDigit = day[0];
        }
        let subscr;
        switch (lastDigit) {
            case 1:
                subscr = 'st';
                break;
            case 2:
                subscr = 'nd';
                break;
            case 3:
                subscr = 'rd';
                break;
            default:
                subscr = 'th';
        }
        return subscr;
    }

    function formatDate(dateString) {
        let year = dateString.slice(6, 10)
        let day = dateString[3] + dateString[4];
        let month = getMonthName(dateString[0] + dateString[1])
        let totalDate = `${month} ${day}${getDaySubscript(day)}, ${year}`
        return totalDate
    }

    function textReducer(text) {
        let thumbnailCharCount = 150;
        let nearestSpaceBarIndex;
        // Find nearest space bar after the looked for char count, store in nearestSpaceBarIndex
        for (let i = thumbnailCharCount; i < text.length; i++) {
            if (text[i] === ' ') {
                nearestSpaceBarIndex = i; 
                break;
            }
        }
        if (text.split('').length > thumbnailCharCount) {
            return `${text.slice(0, nearestSpaceBarIndex)}... `;
        }
    }

    let [selected, setSelected] = useState(false);

    function selectDropDown (entryId) {

    }

    return (
        <BlogContainer>
            {blogData.map((entry) => {
                return <BlogCard key={entry.id} onClick={() => selectDropDown(entry.id)} >
                    <StyledImage src={entry.imgUrl}></StyledImage>
                    <StyledText >
                    <h2>{entry.title}</h2>
                    <h4>{formatDate(entry.date)}</h4>
                    <p>{textReducer(entry.text)}</p>
                    {selected && <div>
                        SELECTED
                    </div>}

                    </StyledText>
                </BlogCard>
            })}
        </BlogContainer>
    );

}

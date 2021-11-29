
module.exports =_lang=>{
    lang =_lang.toUpperCase()
    //console.log('lang', lang)
    switch(lang){
        case'KO':
        return {
            ERROR:{
                NOT_FOUND   :'존재하지 않는 데이터 입니다.',

            },
            LIST:{
                TITLE  :'도서 목록',
                DESC   : '등록된 도서들의 리스트들 입니다.',

            },
            GLOBAL:{
                LOGO       :'도서관리시스템',
                TAB_TITLE : 'Express 게시판',
                NAVI:['도서등록','도서리스트'],
            
            },
            VIEW:{
                TITLE  :'도서 상세 정보',
                DESC   :'선택하신 도서의 상세 정보 입니다.',

            },
            CREATE:{
                TITLE: '도서 등록',
                DESC :'등록할 도서를 아래에서 입력하세요.',

            },
            UPDATE:{
                TITLE_UPDATE: '도서 수정',
                DESC_UPDATE :'수정할 도서 내용을 아래에서 변경하세요.',

            },
            FIELD :{
                NO   :'번호',
                TITLE : '제목',
                WRITER :' 저자',
                CONTENT: '요약설명',
                DATE: '등록일',
                COVER: '표지',
                STATUS: '판매',
                UPFILE: '첨부파일',
            },
            BT:{
                UPDATE  :'수정',
                DELETE :'삭제',
                CREATE :'등록',
                LIST :'리스트',
                RESET:'다시 등록',

            },
            MSG: {
                DELETE : '정말로 삭제하시겠습니까?'
            },

            
            }
            case'EN':
            return {
                ERROR:{
                    NOT_FOUND   :'Data NOT FOUND',
    
                },
                LIST:{
                    TITLE  :'Book List',
                    DESC   : 'This is a list of registered books.',
    
                },
                GLOBAL:{
                    LOGO       :'BOOK MANAGEMENT SYSTEM',
                    TAB_TITLE : 'Express Board',
                    NAVI:['Book Register','Book List'],
                },
                VIEW:{
                    TITLE  :'Book Detail Information',
                    DESC   :'Detailed information of the selected book.',
    
                },
                CREATE:{
                    TITLE: 'Book Register',
                    DESC :'please enter the book you wish to register below.',
    
                },
                UPDATE:{
                    TITLE_UPDATE: 'Book Update',
                    DESC_UPDATE :'Change the contents of the book to be edited below',
    
                },
                FIELD :{
                    NO   :'No',
                    TITLE : 'Title',
                    WRITER :'Writer',
                    CONTENT: 'Content',
                    DATE: 'Date',
                    COVER: 'Cover',
                    STATUS: 'Status',
                    UPFILE: 'Attachment file',
                },
                BT:{
                    UPDATE :'UPDATE',
                    DELETE :'DELETE',
                    CREATE :'CREATE',
                    LIST :'LIST',
                    RESET:'RESET',   
                },
                MSG: {
                    DELETE : 'Are you sure you want to delete it?'
                },

        }
        
    }
    
}




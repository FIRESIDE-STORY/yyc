/* lexical grammar */

%lex
%%
\s+                             /* skip whitespace */
"//"                            /* skip whitespace */
[0-9]+("."[0-9]+)?\b            return 'number'
"*"                             return '*'
"/"                             return '/'
"-"                             return '-'
"+"                             return '+'
"^"                             return '^'
"!"                             return '!'
"%"                             return '%'
"("                             return '('
")"                             return ')'
'<'                             return '<'
'>'                             return '>'
'>='                            return '>='
'<='                            return '<='
'='                             return '='
'=='                            return '=='
'=>'                            return '=>'
'`'                             return '`'

'let'                           return 'let'
'const'                         return 'const'
'fn'                            return 'fn'
'import'                        return 'import'
'as'                            return 'as'
'print'                         return 'print'
'if'                            return 'if'
\s+                             return 'space'
'||'                            return '||'
'&&'                            return '&&'
'!'                             return '!'

\"[^\"\n]*\"                    return 'string'
\'[^\"\n]*\'                    return 'string'
[a-zA-Z][a-zA-Z0-9?]*           return 'name'
[\u4e00-\u9fa5]+                return 'name'
<<EOF>>                         return 'EOF'


/lex
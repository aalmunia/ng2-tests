import { Injectable } from '@angular/core';

@Injectable()
export class OrgchartExampleService {

  constructor() { }

  getMockData() {
    return [
      {
        label: 'Lenguajes de programación',
        children: [
          {
            label: 'Basados en ALGOL',
            children: [
              {
                label: 'Derivados de C',
                children: [
                  {
                    label: 'C/C++',
                    url: 'http://www.stroustrup.com/'
                  },
                  {
                    label: 'Java',
                    url: 'http://www.java.com/'
                  },                  
                  {
                    label: 'PHP',
                    url: 'http://www.php.net'
                  },
                  {
                    label: 'C#',
                    url: 'https://docs.microsoft.com/es-es/dotnet/csharp/programming-guide/'
                  }
                ]
              }
            ]
          },
          {
            label: 'Basados en LISP',
            children: [
              {
                label: 'Common LISP',
                url: 'http://common-lisp.net/'
              },
              {
                label: 'Scheme',
                url: 'http://www.schemers.org/'
              },
              {
                label: 'Clojure',
                url: 'https://clojure.org/'
              },
              {
                label: 'Haskell',
                url: 'https://www.haskell.org/'
              },
              {
                label: 'Scala',
                url: 'https://www.scala-lang.org/'
              }
            ]
          },
          {
            label: 'Otros',
            chidren: [
              {
                label: 'Python',
                url: 'https://www.python.org/'
              },
              {
                label: 'Basic',
                url: 'https://es.wikipedia.org/wiki/BASIC'
              },
              {
                label: 'ADA',
                url: 'http://www.adacore.com/adaanswers/about/ada'
              },
              {
                label: 'Brainfuck',
                url: 'https://es.wikipedia.org/wiki/Brainfuck'
              }
            ]
          }
        ]
      }
    ];
  }

}

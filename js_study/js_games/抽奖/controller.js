angular.module('app', [])
    .controller('myCtrl',function ($scope) {
        $scope.allnumber = 50;
        $scope.number=5;
        $scope.numberarr = [1,2,3,4,5,6,7,8,9,10];
        $scope.luckarr = [];
        $scope.start= function() {
            $scope.luckarr.length=0;
            for(var i =0;i<$scope.number;i++){
                // $scope.luck = 2;
                $scope.luck  = Math.ceil(Math.random()*($scope.allnumber));
                    $scope.luckarr.push($scope.luck);
            }
            $scope.unique = function(data) {
                var data = data||[];
                var a={};
                for(var i = 0;i<data.length;i++){
                    var v=data[i];
                    if(typeof(a[v]=='undefined')){
                        a[v]=1;
                    }
                };
                data.length=0;
                for(var i in a){
                    data[data.length]=i;
                }
                return data;
            }
            $scope.unique($scope.luckarr);
            if($scope.luckarr.length<$scope.number){
                $scope.start();
            }

        }
        //数组去重
        // var str = [34,2,5325,63,6,6,2]
        // var str1=[];
        // function first(args){
        //     for(var i=0;i<args.length;i++){
        //         if(str1.indexOf(args[i])<0){
        //             str1.push(args[i])
        //         }
        //     }
        //     return str1;
        // }
        // first(str);
        // console.log(str1);
    })

    
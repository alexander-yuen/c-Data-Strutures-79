var array_of_names = [];
function submit()
{
    var name1 = document.getElementById("student1").value;
    var name2 = document.getElementById("student2").value;
    var name3 = document.getElementById("student3").value;
    var name4 = document.getElementById("student4").value;

    array_of_names.push(name1);
    array_of_names.push(name2);
    array_of_names.push(name3);
    array_of_names.push(name4);
    var unsorted_array = [];

    unsorted_array.push(name1);
    unsorted_array.push(name2);
    unsorted_array.push(name3);
    unsorted_array.push(name4);

    console.log(array_of_names);

    document.getElementById("display_name").innerHTML = array_of_names;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    array_of_names.sort();
    console.log(array_of_names);
    document.getElementById("display_name").innerHTML = array_of_names;
    document.getElementById("submit_button").style.display = "inline-block";
    document.getElementById("unsort_button").style.display = "inline-block";
}

function unsorting()
{
    document.getElementById("display_name").innerHTML = unsorted_array;

}
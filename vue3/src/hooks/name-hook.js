import { ref, computed, watch } from "vue";

const nameHook = function (msg) {
  const name = ref(); //{//RO}
  const lastname = ref("Some last name");
  const newFullNameLength = ref(0);

  const fullName = computed(() => name.value + " " + lastname.value);

  const changeName = (newName) => {
    name.value = newName;
  };

  watch(fullName, (newFullName) => {
    console.log(newFullName.length);
    newFullNameLength.value = newFullName.length;
  });

  return {
    name,
    lastname,
    fullName,
    changeName,
    newFullNameLength,
  };
};

export default nameHook;

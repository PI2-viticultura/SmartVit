from behave import given, when, then

@given('behave instalado')
def step_impl_given(context):
    pass

@when('implenta-se um teste')
def step_impl_when(context):
    assert True is not False

@then('behave conseguirá testar')
def step_impl_then(context):
    assert context.failed is False

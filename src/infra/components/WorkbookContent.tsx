import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Chip,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
} from '@heroui/react'
import { useState } from 'react'

type ConceptId = 'components' | 'state' | 'conditional' | 'forms' | 'lists' | 'effects'

export default function WorkbookContent() {
    const [activeConcept, setActiveConcept] = useState<ConceptId | null>(null)

    const closeConcept = () => setActiveConcept(null)

    return (
        <>
            <div className="space-y-6 text-sm">
                {/* Intro */}
                <Card className="bg-content1/80">
                    <CardBody className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <h1 className="text-2xl font-semibold">Mini React Lab</h1>
                                <p className="text-default-500">
                                    We&apos;ll build React from first principles and finish with a
                                    Todo app using everything we&apos;ve learned.
                                </p>
                            </div>
                            <Chip color="primary" size="sm" variant="flat">
                                ~2 hour workshop
                            </Chip>
                        </div>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>You only need basic JavaScript, HTML and CSS.</li>
                            <li>No prior React experience required.</li>
                            <li>
                                We learn a concept here, then you open the matching exercise from
                                the <b>Exercises</b> menu in the top-right.
                            </li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Tip: Keep this workbook open on one side, and your editor on the other.
                            This page replaces slides.
                        </p>
                    </CardBody>
                </Card>

                {/* Components & JSX */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">1. Components & JSX</h2>
                            <p className="text-xs text-default-500">
                                Components are functions that return JSX. JSX is HTML-like syntax
                                inside JavaScript.
                            </p>
                        </div>
                        <Button
                            size="sm"
                            variant="flat"
                            onPress={() => setActiveConcept('components')}
                        >
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            A component is just a function that returns JSX. You can reuse
                            components like building blocks.
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>Component names start with a capital letter.</li>
                            <li>
                                JSX lets you write <code>&lt;div&gt;Hello&lt;/div&gt;</code> inside
                                your JS/TS.
                            </li>
                            <li>
                                Props are the <b>inputs</b> to a component.
                            </li>
                        </ul>
                        <p className="text-xs text-default-400">
                            You&apos;ll use this everywhere, starting in Exercise 1.
                        </p>
                    </CardBody>
                </Card>

                {/* State & events */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">2. State & Events</h2>
                            <p className="text-xs text-default-500">
                                State lets components remember values. Events (click, input) are how
                                users change that state.
                            </p>
                        </div>
                        <Button size="sm" variant="flat" onPress={() => setActiveConcept('state')}>
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            <code>useState</code> gives a component memory. When you call the
                            setter, React re-renders the component and updates the UI.
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>
                                <code>const [value, setValue] = useState(initial)</code>
                            </li>
                            <li>Event handlers call the setter to change state.</li>
                            <li>UI is always a reflection of the current state.</li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Related: <b>Exercise 1 – Counter</b>.
                        </p>
                    </CardBody>
                </Card>

                {/* Conditional rendering */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">3. Conditional rendering</h2>
                            <p className="text-xs text-default-500">
                                Show or hide parts of the UI based on state. No manual DOM
                                manipulation.
                            </p>
                        </div>
                        <Button
                            size="sm"
                            variant="flat"
                            onPress={() => setActiveConcept('conditional')}
                        >
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            Instead of <code>show()</code>/<code>hide()</code>, you simply decide
                            what to render:
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>
                                <code>{`{isOpen && <Panel />}`}</code> – render only when open.
                            </li>
                            <li>
                                <code>{`{isOpen ? "Hide" : "Show"}`}</code> – switch labels.
                            </li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Related: <b>Exercise 2 – Toggle Card</b>.
                        </p>
                    </CardBody>
                </Card>

                {/* Forms & validation */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">4. Forms & validation</h2>
                            <p className="text-xs text-default-500">
                                Controlled inputs keep form values in state, making validation
                                straightforward.
                            </p>
                        </div>
                        <Button size="sm" variant="flat" onPress={() => setActiveConcept('forms')}>
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            Controlled input pattern: value comes from state, and typing calls{' '}
                            <code>setState</code>.
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>
                                <code>{`<input value={name} onChange={e => setName(e.target.value)} />`}</code>
                            </li>
                            <li>Validation = run checks on state and show messages.</li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Related: <b>Exercise 3 – Profile Preview</b>.
                        </p>
                    </CardBody>
                </Card>

                {/* Lists & derived state */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">5. Lists & derived state</h2>
                            <p className="text-xs text-default-500">
                                Use <code>.map()</code> to render lists, and derive filtered views
                                from state.
                            </p>
                        </div>
                        <Button size="sm" variant="flat" onPress={() => setActiveConcept('lists')}>
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            React loves arrays. You map them to JSX and compute filtered versions
                            instead of storing duplicates in state.
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>
                                Each item needs a stable <code>key</code>.
                            </li>
                            <li>
                                Filtering is just <code>.filter()</code> over your array.
                            </li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Related: <b>Exercise 4 & 5</b>.
                        </p>
                    </CardBody>
                </Card>

                {/* Effects */}
                <Card className="bg-content1/80">
                    <CardHeader className="flex items-center justify-between gap-3">
                        <div>
                            <h2 className="text-lg font-semibold">6. Side effects & useEffect</h2>
                            <p className="text-xs text-default-500">
                                Interacting with the outside world: localStorage, network, etc.
                            </p>
                        </div>
                        <Button
                            size="sm"
                            variant="flat"
                            onPress={() => setActiveConcept('effects')}
                        >
                            Open demo
                        </Button>
                    </CardHeader>
                    <CardBody className="space-y-2">
                        <p>
                            React handles rendering. Anything else (saving, loading, timers) is a
                            side effect. We use <code>useEffect</code> to do that work.
                        </p>
                        <ul className="list-disc pl-5 text-default-500">
                            <li>
                                <code>{`useEffect(() => { /* effect */ }, [deps])`}</code>
                            </li>
                            <li>
                                <code>[]</code> → run once on mount; <code>[value]</code> → when
                                value changes.
                            </li>
                        </ul>
                        <p className="text-xs text-default-400">
                            Related: <b>Exercise 6 – Autosaving Note</b>.
                        </p>
                    </CardBody>
                </Card>
            </div>

            {/* Concept demo modal */}
            <Modal
                backdrop="blur"
                isOpen={activeConcept !== null}
                scrollBehavior="inside"
                size="3xl"
                onOpenChange={(isOpen) => {
                    if (!isOpen) {
                        closeConcept()
                    }
                }}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex items-center justify-between gap-2">
                                <div className="text-sm font-semibold">
                                    {activeConcept === 'components' && 'Components & JSX – demo'}
                                    {activeConcept === 'state' && 'State & events – demo'}
                                    {activeConcept === 'conditional' &&
                                        'Conditional rendering – demo'}
                                    {activeConcept === 'forms' && 'Forms & validation – demo'}
                                    {activeConcept === 'lists' && 'Lists & derived state – demo'}
                                    {activeConcept === 'effects' &&
                                        'useEffect & side effects – demo'}
                                </div>
                            </ModalHeader>
                            <ModalBody className="pb-4">
                                <ConceptDemo activeConcept={activeConcept} />
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

/**
 * Demo content shown in the concept modal: side-by-side code + live example.
 */
function ConceptDemo({ activeConcept }: { activeConcept: ConceptId | null }) {
    if (!activeConcept) {
        return null
    }

    if (activeConcept === 'components') {
        return (
            <div className="grid gap-4 md:grid-cols-2">
                <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                    <code>{`type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <p>Hello {name}!</p>;
}

export function ComponentsExample() {
  return (
    <div>
      <Greeting name="React learner" />
      <Greeting name="Workshop friend" />
    </div>
  );
}`}</code>
                </pre>
                <div className="space-y-2">
                    <p className="text-xs text-default-500">
                        Live example (two reusable <code>Greeting</code> components):
                    </p>
                    <div className="rounded-lg border border-default-100 p-3 text-sm">
                        <p>Hello React learner!</p>
                        <p>Hello Workshop friend!</p>
                    </div>
                    <ul className="list-disc pl-5 text-xs text-default-500">
                        <li>Same component, different props.</li>
                        <li>Components are just functions that return JSX.</li>
                    </ul>
                </div>
            </div>
        )
    }

    if (activeConcept === 'state') {
        return <StateDemo />
    }

    if (activeConcept === 'conditional') {
        return <ConditionalDemo />
    }

    if (activeConcept === 'forms') {
        return <FormDemo />
    }

    if (activeConcept === 'lists') {
        return <ListDemo />
    }

    if (activeConcept === 'effects') {
        return <EffectDemo />
    }

    return null
}

/* === Individual demo components === */

function StateDemo() {
    const [count, setCount] = useState(0)

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                <code>{`export function StateExample() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You clicked {count} times
    </button>
  );
}`}</code>
            </pre>
            <div className="space-y-2">
                <p className="text-xs text-default-500">
                    Live counter using <code>useState</code>:
                </p>
                <div className="rounded-lg border border-default-100 p-3 text-sm">
                    <Button size="sm" onPress={() => setCount(count + 1)}>
                        You clicked {count} times
                    </Button>
                </div>
                <ul className="list-disc pl-5 text-xs text-default-500">
                    <li>
                        <code>useState(0)</code> gives <code>count</code> and <code>setCount</code>.
                    </li>
                    <li>Clicking updates state → React re-renders.</li>
                </ul>
            </div>
        </div>
    )
}

function ConditionalDemo() {
    const [open, setOpen] = useState(false)

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                <code>{`export function ConditionalExample() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        {open ? "Hide details" : "Show details"}
      </button>

      {open && <p>Here are some details...</p>}
    </div>
  );
}`}</code>
            </pre>
            <div className="space-y-2">
                <p className="text-xs text-default-500">
                    Live toggle using <code>&amp;&amp;</code>:
                </p>
                <div className="rounded-lg border border-default-100 p-3 text-sm space-y-2">
                    <Button size="sm" onPress={() => setOpen((o) => !o)}>
                        {open ? 'Hide details' : 'Show details'}
                    </Button>
                    {open && <p>Here are some details...</p>}
                </div>
                <ul className="list-disc pl-5 text-xs text-default-500">
                    <li>State decides what we render.</li>
                    <li>No manual DOM show/hide calls.</li>
                </ul>
            </div>
        </div>
    )
}

function FormDemo() {
    const [name, setName] = useState('')
    const isValid = name.trim().length >= 2

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                <code>{`export function FormExample() {
  const [name, setName] = useState("");
  const isValid = name.trim().length >= 2;

  return (
    <form>
      <label>
        Name:
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      {!isValid && (
        <p style={{ color: "red" }}>
          Name must be at least 2 characters
        </p>
      )}
    </form>
  );
}`}</code>
            </pre>
            <div className="space-y-2">
                <p className="text-xs text-default-500">Live controlled input + validation:</p>
                <div className="rounded-lg border border-default-100 p-3 text-sm space-y-2">
                    <label className="flex flex-col gap-1 text-xs">
                        Name:
                        <input
                            className="rounded border border-default-200 px-2 py-1 text-sm bg-content2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    {!isValid && (
                        <p className="text-xs text-danger-500">
                            Name must be at least 2 characters
                        </p>
                    )}
                    <p className="text-xs text-default-500">Hello {name || 'stranger'}!</p>
                </div>
                <ul className="list-disc pl-5 text-xs text-default-500">
                    <li>Input value is driven by state.</li>
                    <li>Validation is just an expression on state.</li>
                </ul>
            </div>
        </div>
    )
}

function ListDemo() {
    const [query, setQuery] = useState('')
    const items = ['React', 'Vue', 'Svelte', 'Angular']
    const filtered = items.filter((item) => item.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                <code>{`export function ListExample() {
  const [query, setQuery] = useState("");
  const items = ["React", "Vue", "Svelte", "Angular"];

  const filtered = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}`}</code>
            </pre>
            <div className="space-y-2">
                <p className="text-xs text-default-500">Live search over a list:</p>
                <div className="rounded-lg border border-default-100 p-3 text-sm space-y-2">
                    <input
                        className="w-full rounded border border-default-200 px-2 py-1 text-sm bg-content2"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <ul className="list-disc pl-5">
                        {filtered.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    {filtered.length === 0 && (
                        <p className="text-xs text-default-500">No results.</p>
                    )}
                </div>
                <ul className="list-disc pl-5 text-xs text-default-500">
                    <li>
                        Use <code>.map()</code> to render lists.
                    </li>
                    <li>
                        Use <code>.filter()</code> to derive filtered views.
                    </li>
                </ul>
            </div>
        </div>
    )
}

function EffectDemo() {
    const [note, setNote] = useState('')

    return (
        <div className="grid gap-4 md:grid-cols-2">
            <pre className="text-xs bg-default-100/70 rounded-md p-2 overflow-auto">
                <code>{`export function EffectExample() {
  const [note, setNote] = useState("");

  useEffect(() => {
    window.localStorage.setItem("demo-note", note);
  }, [note]);

  return (
    <textarea
      value={note}
      onChange={e => setNote(e.target.value)}
      placeholder="Type something..."
    />
  );
}`}</code>
            </pre>
            <div className="space-y-2">
                <p className="text-xs text-default-500">
                    Live autosaving note (simplified version of Exercise 6):
                </p>
                <div className="rounded-lg border border-default-100 p-3 text-sm space-y-2">
                    <textarea
                        className="w-full rounded border border-default-200 px-2 py-1 text-sm bg-content2 min-h-[80px]"
                        placeholder="Type something..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <p className="text-xs text-default-500">
                        In a full example, we&apos;d also <b>load</b> from localStorage on mount.
                    </p>
                </div>
                <ul className="list-disc pl-5 text-xs text-default-500">
                    <li>
                        Effects run <b>after</b> React updates the screen.
                    </li>
                    <li>Great for saving, loading, and other side effects.</li>
                </ul>
            </div>
        </div>
    )
}
